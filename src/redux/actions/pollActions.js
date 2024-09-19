import { _getQuestions, _saveQuestionAnswer } from '../../utils/_DATA';

export const GET_POLLS = 'GET_POLLS';
export const CREATE_POLL = 'CREATE_POLL';
export const VOTE = 'VOTE';
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

export function _vote(authedUser, qid, answer) {
  return {
    type: VOTE,
    authedUser,
    qid,
    answer,
  };
}

export function handleGetPolls(answers = []) {
  return async (dispatch) => {
    const data = await _getQuestions();
    const newQuestions = Object.values(data).filter(question => !Object.keys(answers).includes(question.id));
    const doneQuestions = Object.values(data).filter(question => Object.keys(answers).includes(question.id));
    dispatch(_getPolls({newQuestions, doneQuestions}));
  };
}

export function handleVote(user, questionId, answer) {
  return async (dispatch) => {
    await _saveQuestionAnswer({
      authedUser: user,
      qid: questionId,
      answer: answer,
    });
    dispatch(_vote(user, questionId, answer));
  };
}

export function handleCreatePoll(poll) {
  return async (dispatch) => {
    const data =  _createPoll(poll);
    dispatch(_createPoll(data));
  };
}