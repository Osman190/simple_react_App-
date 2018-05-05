import React, { Component } from 'react';
import '../css/App.css';
import { NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login.jsx';

const fakeAuth = {
    isAuthenticated: false,
    authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />
//         }
//     />
// );

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
    }
    render() {
        let whatToRender = (
            <div className="container center-align materialboxed">
                <ul className="row card-panel hoverable ">
                    <li className="waves-effect waves-light btn center-align col s8 m6 l2">
                        <Link to="/public">Public Page</Link>
                    </li>
                    <br />
                    <br />
                    <li className="waves-effect waves-light btn center-align down col s8 m6 l2">
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                {/* <PrivateRoute path="/protected" component={Protected} /> */}
            </div>
        );
        if (this.state.value) {
            whatToRender = <h1>nacho</h1>;
        }
        return <Router>{whatToRender}</Router>;
    }
}

export default App;
