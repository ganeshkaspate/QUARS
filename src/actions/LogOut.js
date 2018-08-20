import history from '../history';
import { SIGN_OUT_SUCCESS, FETCHING_DATA_FAILED } from '../constants/AppConstants';
import { signOut } from '../APIs/LogOut';
import HttpStatus from 'http-status-codes';



export function processLogOut(token) {
    return (dispatch) => {
        sendSignOut(dispatch, token);
    }
}

//Handling sign out API response
export function sendSignOut(dispatch, token) {
    signOut(token)
        .then((response) => {
            if (response.status === HttpStatus.OK)
                dispatch(afterSignOut(response.payload))
            else
                dispatch(fetchFailure(response.status));
        })
}

//Action to be dispatched after successful sign out
export function afterSignOut() {

    return {
        type: SIGN_OUT_SUCCESS
    }
}

export function fetchFailure(data) {
    return {
        type: FETCHING_DATA_FAILED,
        data: data,
    }
}