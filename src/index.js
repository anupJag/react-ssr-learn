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
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));

app.get('/*', (req, res) => {

    console.log(`Requesting page: ${req.path}`)

    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData && route.loadData(store);
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            })
        }
    })

    Promise.all(promises).then(() => {
        const context = {};
        const html = renderer(req, store, context);
        
        console.log(context);
        if(context.url){
            res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(html);
    });
});


app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
