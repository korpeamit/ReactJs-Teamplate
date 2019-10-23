import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'; // step 1
import { Provider } from 'react-redux';// step 2
import routeReduser from './reducers/routeReduser';

const store = createStore(routeReduser);

ReactDOM.render(
    <Provider store={store}> {/* step 1 - store step 2 - Provider  */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
