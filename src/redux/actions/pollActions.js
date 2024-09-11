import { _getQuestions } from '../../utils/_DATA';

export const GET_POLLS = 'GET_POLLS';
export const CREATE_POLL = 'CREATE_POLL';
export function _getPolls(polls) {
  return {
    type: GET_POLLS,
    polls,
  };
}

export function _createPoll(poll) {
  return {
    type: CREATE_POLL,
    poll,
  };
}

export function handleGetPolls(answers = []) {
  return async (dispatch) => {
    const data = await _getQuestions();
    const newQuestions = Object.values(data).filter(question => !Object.keys(answers).includes(question.id));
    const doneQuestions = Object.values(data).filter(question => Object.keys(answers).includes(question.id));
    console.log(data);
    dispatch(_getPolls({newQuestions, doneQuestions}));
  };
}

export function handleCreatePoll(poll) {
  return async (dispatch) => {
    const data =  _createPoll(poll);
    dispatch(_createPoll(data));
  };
}