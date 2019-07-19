//Startup point for Client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers';
import { renderRoutes } from 'react-router-config';

const clientStore = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(thunk));


ReactDOM.hydrate(
    <Provider store={clientStore}>
        <BrowserRouter>
            <div>
                {
                    renderRoutes(Routes)
                }
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));
