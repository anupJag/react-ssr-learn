//Startup point for Client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


ReactDOM.hydrate(<Home />, document.querySelector('#root'));
