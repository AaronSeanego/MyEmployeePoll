import * as API from '../data/_DATA';
import { getUsers } from '../reducers/login';
import { RECEIVE_DATA } from '../actions/shared';
import {setAuthedUser} from '../actions/authedUser';
export const GET_USER = 'GET_USER';
export const ADD_USER = 'LOG_IN';
export const LOG_IN = 'LOG_IN';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';


// import {_getUsers,_getQuestions} from '../data/_DATA';

// export const logIn = (username, password) => {
//     return {
//         type: LOG_IN,
//         username,
//         password
//     }
// }

export const logIn = (username) => {
    return {
        type: LOG_IN,
        username
    }
}

export const getUser = (users) => {
    return {
        type: RECEIVE_DATA,
        users
    }
}

export const updateUserAnswer = ({ authedUser, qid, answer }) => {
    return {
        type: UPDATE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function updateUsersQuestions(question) {
    return { 
        type: UPDATE_QUESTION, 
        authedUser: question.author, id: question.id };
  }

export function handleGetUser(store) {
    return (dispatch) => {
        return API._getUsers().then((users) => {
            store.dispatch(getUser(users));
          }).catch((error) => {});
    }
}

export function handleLogin(username) {
    return (dispatch) => {
        return dispatch(setAuthedUser(username));
    }
}