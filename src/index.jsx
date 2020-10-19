import React from 'react';
import ReactDOM from 'react-dom'
import Main from './components/main.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './components/store/store.js';
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>


,document.getElementById('root'))