export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}