import HttpStatus from 'http-status-codes';
import history from '../history';
import { createjob  } from '../APIs/createJob';
import { FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_DATA_FAILED} from '../constants/AppConstants';

export function createJob(bodyjson) {
    return (dispatch) => {
        createJobDescription(dispatch, bodyjson);
    }
}

export function createJobDescription(dispatch, bodyjson) {
    createjob(bodyjson)
        .then((response) => {
            if (response.status === 200)
                dispatch(sendJobRecords(response.payload))
            else
                dispatch(fetchFailure(response.status));
        })
}

export function sendJobRecords(data) {
    return {
        type: FETCHING_JOBDESCRIPTION_SUCCESS,
        data: data,
    }
}

export function fetchFailure(data) {
    return {
        type: FETCHING_DATA_FAILED,
        data: data,
    }
}