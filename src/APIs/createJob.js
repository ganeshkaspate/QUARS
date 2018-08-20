import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { CREATE_JOB_PATH } from '../constants/AppConstants';

export const createjob = (bodyJson) =>
    axios.post(
        CREATE_JOB_PATH,
    ).then(data => {
            if(data.status === HttpStatus.OK){
                return {
                    status: data.status,
                    payload: data.data
                };
            }
        }).catch(err => {
            console.log("Error in authorization", err.response.status);
            return {
                status: err.response.status,
                payload: null
            };
    });