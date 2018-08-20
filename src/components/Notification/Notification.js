import React from 'react';
import './Notification.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { processLogOut } from '../../actions/LogOut';

class Notification extends React.Component {


    logout(event) {
        event.preventDefault();
        this.props.processLogOut(this.props.token);
    }

    render() {
        return (
            <div className="notification pull-right" id="notificationDiv">
                <div className="row icon-right-container">
                    <div className="col-xs-3">
                        <span className="message-container">
                            <span className={"badge badge-error " + (this.props.hasUnreadMessage ? 'show-badge' : 'hide-badge')}>{this.props.messageCount}</span>
                            <i className={"glyphicon envelope-icon glyphicon-envelope " + (this.props.hasUnreadMessage ? 'active' : 'inactive')}></i>
                        </span>
                    </div>
                    <div className="col-xs-6 user-name-conatiner">
                        <i className="glyphicon user-icon glyphicon-user"></i>
                        <span className="user-name">{this.props.userName}</span>
                    </div>
                    <div className="col-xs-3">
                        <Link to="" className='logout-link' onClick={(event) => this.logout(event)} >Logout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName: (state.userName) ? state.userName : 'admin',
        hasUnreadMessage: (state.hasUnreadMessage) ? state.hasUnreadMessage : true,
        messageCount: (state.messageCount) ? state.messageCount : 2,
        token: state.tokenDetails.response.authToken
    }
}

function mapDispatchToProps(dispatch) {
    return {
        processLogOut: (token) => dispatch(processLogOut(token))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Notification);