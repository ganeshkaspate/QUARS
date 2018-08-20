import axios from "axios/index";
import { SIGN_OUT_URL } from '../constants/AppConstants';
import HttpStatus from 'http-status-codes';

// SIgnout API
export const signOut = (token) =>
    axios.post(
        SIGN_OUT_URL,
        {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': token
        }

    ).then(data => {
        if (data.status === HttpStatus.OK) {
            return {
                status: data.status,
                payload: data.data
            };
        }
    }).catch(err => {
        console.log("1111Error in logout", err.response.status);
        return {
            status: err.response.status,
            payload: null
        };
    });