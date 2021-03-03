import { combineReducers } from 'redux';
import other from './other';
import auth from './auth';
import signup from './signup';

export default combineReducers({
  other,
  auth,
  signup,
});
