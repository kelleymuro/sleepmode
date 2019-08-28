import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import billing from './billing';

export default combineReducers({
   alert,
   auth,
   billing
});