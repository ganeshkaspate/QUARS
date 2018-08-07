import React from 'react';
import rexlogo from '../../images/app.png';
import './CreateJobNav.css';

export class CreateJobNav extends React.Component {

    render() {
        return (
            <div id="createjob">
                <img src={rexlogo} className="rex-logo-job" />
                <span> <span> > </span> <b>Create Job</b> </span>    
            </div>
        )
    }


}

export default CreateJobNav;