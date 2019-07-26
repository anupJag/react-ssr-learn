import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUsers } from './actions';
import { Switch } from 'react-router-dom';

const App = ({ route }) => {
    return (
        <div>
            <Header />
            <Switch>
                {renderRoutes(route.routes)}
            </Switch>
        </div>
    );
}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUsers())
}