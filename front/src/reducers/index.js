import { combineReducers } from 'redux';
import other from './other';
import auth from './auth';
import signup from './signup';
import exercises from './exercises';
import admin from './admin';

export default combineReducers({
  other,
  auth,
  signup,
  exercises,
  admin,
});
