//import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import $                  from 'jquery';
import Popper             from 'popper.js';
import * as serviceWorker from './serviceWorker';

import { HashRouter }     from 'react-router-dom'
import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';

import { createStore, applyMiddleware } from 'redux';
import { createLogger }                 from 'redux-logger'
import { Provider }                     from 'react-redux';
import thunkMiddleware                  from 'redux-thunk'
import appReducer                       from './Redux/reducers';

import { fetch_boards }                 from './Redux/actions/trello_data';

// Redux Initialization
const loggerMiddleware = createLogger();

const store = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store
    .dispatch(fetch_boards())

// Render App
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
