import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister();
