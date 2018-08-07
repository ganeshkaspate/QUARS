import { LOGIN_SUCCESS, LOGIN_FAILED} from '../constants/AppConstants';

const initialState = {
    response: [],
    hasUserLogIn: false,
    error: false
}

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                hasUserLogIn: true,
                response: action.data,
                error: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                hasUserLogIn: false,
                response: action.data,
                error: true
            }
        default:
            return state
    }
}