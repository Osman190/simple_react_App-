import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login.jsx';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import App from '../App.jsx';

const Router = () => (
    <Switch>
        <Route path="/public" component={Public} />
        <Route path="/protected" component={Protected} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Router;
