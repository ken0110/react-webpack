import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
