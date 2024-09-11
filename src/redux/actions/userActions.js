import { _getUsers } from '../../utils/_DATA';

export const GET_USERS = 'GET_USERS';
export const GET_USER_ANSWER = 'GET_USER_ANSWER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function handleGetUsers() {
  return async (dispatch) => {
    const data = await _getUsers();
    dispatch(getUsers(data));
  };
}
