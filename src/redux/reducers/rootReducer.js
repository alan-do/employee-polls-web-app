import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pollReducer from './pollReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  questions: pollReducer,
  users: userReducer,
  loading: loadingReducer,
});

export default rootReducer;