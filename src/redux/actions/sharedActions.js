import { _getUsers } from '../../utils/_DATA';
import { handleGetUsers } from './userActions';
import { login } from './authActions';


export const SET_LOADING = 'SET_LOADING';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function handleInitialData(users) {
  return (dispatch) => {
    dispatch(setLoading(true));
    return _getUsers().then((users) => {
      dispatch(handleGetUsers(users));
      dispatch(login(users));
      dispatch(setLoading(false));
    });
  };
}