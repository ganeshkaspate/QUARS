import React from 'react';
import './loginComponent.css';
import app from '../../images/app.png';
import RezoomexLogo from '../RezoomexLogo/RezoomexLogo';
import '../RezoomexLogo/RezoomexLogo.css';

class LoginComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="form-container col-xs-offset-4 col-xs-4">
                            <div className="app-logo">
                                <img src={app} alt="text" />
                                <p className="app-name">Quick Assessment and Ranking System </p>
                            </div>
                            <div className="login-form">
                                <form className="form-horizontal" id="loginForm">
                                    <div className="form-group inner-addon left-addon" id="username-div">
                                        <i className="glyphicon glyphicon-user"></i>
                                        <input
                                            type="email"
                                            className="form-control usertext"
                                            id="UserName"
                                            placeholder="Email" /> 
                                    </div>
                                    <div className="form-group inner-addon left-addon">
                                        <i className="glyphicon glyphicon-lock"></i>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password" />
                                    </div>
                                    <div className="forgot-password">
                                        <span> <a href="#"> Forgot Password ? </a> </span>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 no-padding">
                                            <input type="button" className="btn btn-lg btn-primary btn-block login-button" value="Login" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;