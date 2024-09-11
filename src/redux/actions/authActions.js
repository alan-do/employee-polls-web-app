export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(id) {
  return {
    type: LOGIN,
    payload: id,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function handleLogin(selectedUser) {
  return (dispatch) => {
    if (selectedUser) {
      dispatch(login(selectedUser));
    }
  };
}

export function handleLogout() {
  return (dispatch) => {
    dispatch(logout());
  };
}