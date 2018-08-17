import React from 'react';
import './Notification.css';
import {connect} from "react-redux";

class Notification extends React.Component {
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
                        <a className='logout-link'>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userName : (state.userName) ? state.userName : 'gaurav_kr',
        hasUnreadMessage: (state.hasUnreadMessage) ? state.hasUnreadMessage : true,
        messageCount: (state.messageCount) ? state.messageCount : 2
    }
}

export default connect(mapStateToProps) (Notification);