import { combineReducers } from 'redux';

import exerciseManager from 'src/reducers/exerciseManager';
import questionManager from 'src/reducers/exerciseManager/questionManager';
import answerManager from 'src/reducers/exerciseManager/answerManager';
import other from 'src/reducers/other';
import auth from 'src/reducers/auth';
import signup from 'src/reducers/signup';
import exercises from 'src/reducers/exercises';

export default combineReducers({
  other,
  auth,
  signup,
  exercises,
  exerciseManager,
  questionManager,
  answerManager,
});
