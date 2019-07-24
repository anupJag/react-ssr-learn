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
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
});

const clientStore = createStore(
    rootReducer,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);


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
