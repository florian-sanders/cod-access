import { combineReducers } from 'redux';
import auth from './auth';
import signup from './signup';

export default combineReducers({
  auth,
  signup,
});
