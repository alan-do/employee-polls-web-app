import { getInitialData } from '../../utils/api';
import { receiveUsers } from './userActions';
import { receiveQuestions } from './pollActions';
import { setAuthedUser } from './authActions';

const AUTHED_ID = null; // Đặt ID người dùng mặc định nếu cần

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}