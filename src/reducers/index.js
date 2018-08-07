import { combineReducers } from 'redux';
import MainReducer from './MainReducer';

const rootReducer = combineReducers({
  tokenDetails : MainReducer
});

export default rootReducer;