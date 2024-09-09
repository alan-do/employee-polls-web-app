export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function setAuthedUser(id) {
  console.log('id', id);
  return {
    type: SET_AUTHED_USER,
    payload: id,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}