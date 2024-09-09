import { RECEIVE_USERS } from '../actions/userActions';

export default function users(state = [], action) {
    switch (action.type) {
      case RECEIVE_USERS:
        return action.users;
      default:
        return state;
    }
  }