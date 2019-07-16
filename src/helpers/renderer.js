import React from 'react';
import ReactDOM from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {

    const content = ReactDOM.renderToString(<Home />);

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