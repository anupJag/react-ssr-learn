import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {

    const content = ReactDOM.renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div>
                    ${content}
                </div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);

});


app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
});
