import { SET_AUTHED_USER, LOGOUT_USER } from '../actions/authActions';


const initialState = {
  isAuthenticated: false,
  userId: null,
};

export default function auth(state = initialState, action) {
  console.log('action', action);

  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}