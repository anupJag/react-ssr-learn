import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store) => {

    const context = {};

    const content = ReactDOM.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>
                    {
                        renderRoutes(Routes)
                    }
                </div>
            </StaticRouter>
        </Provider>
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