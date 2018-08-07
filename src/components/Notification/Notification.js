import React from 'react';
import './Notification.css';

class Notification extends React.Component {

    render() {
        return (
            <div className="notification pull-right" id="notificationDiv">
                    <div className="col-xs-3">
                        <span>
                            <i className="glyphicon glyphicon-envelope"></i>
                        </span>
                    </div>
                    <div className="col-xs-6">
                        <span>
                            <i className="glyphicon glyphicon-user"></i>
                        </span>
                    </div>
                    <div className="col-xs-3">
                        <span>
                            <i className="glyphicon glyphicon-envelope"></i>
                        </span>
                    </div>
            </div>
        )
    }
}

export default Notification;