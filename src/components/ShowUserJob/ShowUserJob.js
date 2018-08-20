import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import JobDescriptionTable  from './JobDescriptionTable';


class ShowUserJob extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const template =
            this.props.jobDescription.isDataFetching ? (
                <Loader />
            ) : (<JobDescriptionTable jdRecords={this.props.jobData}/>)
        return (
            <div>
                {template}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        jobDescription: state.jobDescription,
        jobData: state.jobDescription.jobData.data
    }
}

export default connect(mapStateToProps, null)(ShowUserJob);