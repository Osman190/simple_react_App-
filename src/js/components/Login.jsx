import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirectToReferrer: false
        };
    }
    // login = () => {
    //     fakeAuth.authenticate(() => {
    //         this.setState(() => ({
    //             redirectToReferrer: true
    //         }));
    //     });
    // };
    render() {
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />;
        }
        <div>
            <p>hahahahhahaha</p>
            <button onClick={this.login}>Log in</button>
        </div>;
    }
}

export default Login;
