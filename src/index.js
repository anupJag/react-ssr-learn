import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {

    const html = renderer();    

    res.send(html);

});


app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
