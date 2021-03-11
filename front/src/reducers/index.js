import { combineReducers } from 'redux';
import other from './other';
import auth from './auth';
import signup from './signup';
import exercises from './exercises';
import forget from './forget';
import users from './users';

export default combineReducers({
  other,
  auth,
  signup,
  exercises,
  forget,
  users,
});
