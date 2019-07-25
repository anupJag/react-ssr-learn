import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store, context) => {

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
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">
                    ${content}
                </div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

}