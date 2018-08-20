import { FETCHING_JOBDESCRIPTION_SUCCESS, FETCHING_DATA_FAILED, FETCHING_JOBS } from '../constants/AppConstants';

const initialState = {
    jobData: {},
    isDataFetching: false,
    dataFetched: false,
    label:'',
    error: false
}

export default function MainReducer(state = initialState, action) {
    switch (action.type) {

        case FETCHING_JOBS: {
            return {
                ...state,
                isDataFetching: true,
            }
        }

        case FETCHING_JOBDESCRIPTION_SUCCESS:
            return {
                ...state,
                isDataFetching: false,
                jobData: action.data,
                dataFetched: true,
                label: 'Job List',
                error: false
            }
        case FETCHING_DATA_FAILED:
            return {
                ...state,
                dataFetched: false,
                isDataFetching: true,
                jobData: action.data,
                error: true
            }
        default:
            return state
    }
}