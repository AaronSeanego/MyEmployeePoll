import { RECEIVE_DATA } from '../actions/shared';
import {GET_USER,ADD_USER,LOG_IN,UPDATE_ANSWER,UPDATE_QUESTION} from '../actions/login';


function updateUserAnswer(state = {}, action) {
    const { qid, answer } = action;
    const { answers } = state;
    return { ...state, answers: { ...answers, [qid]: answer } };
  }
  
  function updateUserQuestion(state = {}, action) {
  
    const { id } = action;
    const { questions } = state;
  
    return { ...state, questions: questions.concat(id) };
  }

export function getUsers(state = {}, action) {
    if(action.type === RECEIVE_DATA) {
        return {
            ...state,
            ...action.users
        };
    }else if(action.type === LOG_IN) {
        return {
            ...state,
            ...action.username
        };
        // return Object.values(state).filter((users) => users.id == action.username && users.password == action.password)
    }else if(action.type === UPDATE_ANSWER){
        const authedUser = action.authedUser;
        return { ...state, [authedUser]: updateUserAnswer(state[authedUser], action) };
    }else if(action.type === UPDATE_QUESTION) {
        const { authedUser } = action;
        return { ...state, [authedUser]: updateUserQuestion(state[authedUser], action) };
    }else {
        return {...state};
    }
}