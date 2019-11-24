import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

import $                  from 'jquery';
import Popper             from 'popper.js';
import React              from 'react';
import ReactDOM           from 'react-dom';
import App                from './App';
import * as serviceWorker from './serviceWorker';
import appReducer            from './Redux/reducers';
import { HashRouter }     from 'react-router-dom'
import { Provider }       from 'react-redux';
import { createStore }    from 'redux';

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
