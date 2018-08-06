import React from 'react';
import logo from '../../images/logo.png';
import line from '../../images/line.png';
import './NavBarComponent.css';
import SignInComponent from './SignInComponent';
import LoginComponent from '../LoginComponent/LoginComponent';
import RezoomexLogo  from '../RezoomexLogo/RezoomexLogo';

const NavBarComponent = function() {
    return (
        <div className="container-fluid navbar-padding">
            <nav className="navbar navbar-default">
                 <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <img src={logo} alt="Dispute Bills"  className="logo"/>
                                <img id="lineId" src={line} alt="lineDivide" className="lineposition" />
                            </div>
                        </div>
                  </div>
            </nav>
            <SignInComponent />
            <LoginComponent />
            <RezoomexLogo />
        </div>
    );
}

export default NavBarComponent;