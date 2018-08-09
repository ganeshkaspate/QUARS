import React from 'react';
import './MainCreateJobComponent.css';
import rexAssistant from '../../images/robo.png';

export default class MainCreateJobComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-4">
                        <div className="job-container">
                            <div className="row">
                                <div className="rez-assistant">
                                    <img src={rexAssistant} alt="rexImage" />
                                </div>
                                <div className="rexdata">
                                    <p><b>Hey, I am Rex ! </b> Your virtual assistant !</p>
                                </div>
                                <div className="jobData">
                                    <p>Your job list is empty.</p>
                                    <p>Create new job by clicking button below !</p>
                                </div>
                                <div className="createJobButton">
                                    <input
                                        type="button"
                                        className="btn btn-lg btn-primary btn-block create-button "
                                        value="Create New Job" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}