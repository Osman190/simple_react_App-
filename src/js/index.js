import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import $ from 'materialize-css/dist/js/materialize.min.js';
import App from './App.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
