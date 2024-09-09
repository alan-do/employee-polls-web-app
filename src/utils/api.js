import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA';
  
  export async function getInitialData() {
    const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
    return ({
      users,
      questions,
    });
  }
  
  export async function login(id, password) {
    const users = await _getUsers();
    const user = users.find((u) => u.id === id && u.password === password);
    return user;
  }
  
  export function saveQuestion(question) {
    return _saveQuestion(question);
  }
  
  export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
  }