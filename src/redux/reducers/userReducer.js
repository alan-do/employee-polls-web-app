import { GET_USERS } from '../actions/userActions';

export default function users(state = [], action) {
    switch (action.type) {
      case GET_USERS:
        return action.users;
      default:
        return state;
    }
  }