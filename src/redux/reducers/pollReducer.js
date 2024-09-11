import { GET_POLLS, CREATE_POLL } from '../actions/pollActions';

export default function polls(state = {}, action) {
  switch (action.type) {
    case GET_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case CREATE_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    default:
      return state;
  }
}