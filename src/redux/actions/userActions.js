import { getInitialData } from '../../utils/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    const data = await getInitialData();
    dispatch(receiveUsers(data.users));
  };
}