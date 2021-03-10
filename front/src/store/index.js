import { createStore, compose, applyMiddleware } from 'redux';

import reducer from 'src/reducers';
import otherMiddleware from 'src/middlewares/other';
import authMiddleware from 'src/middlewares/auth';
import signupMiddleware from 'src/middlewares/signup';
import exercisesMiddleware from 'src/middlewares/exercises';
import exerciseManagerMiddleware from 'src/middlewares/exerciseManager/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    otherMiddleware,
    authMiddleware,
    signupMiddleware,
    exercisesMiddleware,
    exerciseManagerMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
