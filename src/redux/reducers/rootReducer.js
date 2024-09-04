import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pollReducer from './pollReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authedUser: authReducer,
  questions: pollReducer,
  users: userReducer,
});

export default rootReducer;