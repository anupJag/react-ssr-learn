import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {

    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData && route.loadData(store);
    });

    Promise.all(promises).then(() => {
        const html = renderer(req, store);
        res.send(html);
    })
});


app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
