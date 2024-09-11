import { LOGIN, LOGOUT } from '../actions/authActions';


const initialState = {
  isAuthenticated: false,
  userId: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}