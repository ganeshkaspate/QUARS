import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import { Table } from 'react-bootstrap';
import './JobDescription.css';


class JobDescriptionTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jdRecords: props.jdRecords
        }
    }

    render() {
        const compName = {
            fontSize: '14px'
        };

        return (
            <div className="container-fluid">
                <div className="row">
                    <Table striped condensed hover>
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Company Name</th>
                                <th>Technology</th>
                                <th>Job Title</th>
                                <th>Total Score</th>
                                <th>Average Score</th>
                            </tr>
                        </thead>
                        <tbody>{this.props.jobData.data.map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td><b style={compName}>{item.id}</b></td>
                                    <td><b style={compName}>{item.attributes.companyName}</b></td>
                                    <td>Xamarian Developer</td>
                                    <td>{item.attributes.name}</td>
                                    <td>30</td>
                                    <td>30</td>
                                </tr>
                            )
                        })}</tbody>
                    </Table>
                </div>
            </div>
        )

    }
}


function mapStateToProps(state) {
    return {
        jobDescription: state.jobDescription,
        jobData: state.jobDescription.jobData
    }
}

export default connect(mapStateToProps, null)(JobDescriptionTable);