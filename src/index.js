import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

const PORT = process.env.PORT || 3000;


app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forward-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {

    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData && route.loadData(store);
    });

    Promise.all(promises).then(() => {
        const html = renderer(req, store);
        res.send(html);
    }).catch(error => {
        console.log(error);
    })
});


app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
