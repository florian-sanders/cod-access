import { combineReducers } from 'redux';
import other from './other';
import auth from './auth';
import signup from './signup';
import exercises from './exercises';

export default combineReducers({
  other,
  auth,
  signup,
  exercises,
});
