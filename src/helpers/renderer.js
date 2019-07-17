import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {

    const context = {};

    const content = ReactDOM.renderToString(
        <StaticRouter location={req.path} context={context}>
            <Routes />
        </StaticRouter>
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

}