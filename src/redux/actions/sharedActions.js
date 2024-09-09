import { getInitialData } from '../../utils/api';
import { receiveUsers } from './userActions';
import { receiveQuestions } from './pollActions';
import { setAuthedUser } from './authActions';

const AUTHED_ID = 'sarahedo';

export const SET_LOADING = 'SET_LOADING';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(setLoading(true));
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(setLoading(false));
    });
  };
}