import { combineReducers } from 'redux';
import MainReducer from './MainReducer';
import jobDescription from './JobDescription';

const rootReducer = combineReducers({
  tokenDetails : MainReducer,
  jobDescription: jobDescription
});

export default rootReducer;