import * as API from '../data/_DATA';
import {receiveQuestions} from '../actions/questions';
import {getUser} from '../actions/login';
export const RECEIVE_DATA = 'RECEIVE_DATA';
// import { showLoading, hideLoading } from 'react-redux-loading-bar';


export function receiveData(users, questions) {
    return {
        type: RECEIVE_DATA,
        users,
        questions
    }
}

export function handleInitialData(store) {
    return (dispatch) => {
        return Promise.all([API._getUsers(),API._getQuestions()]).then(([users,questions]) => {
            dispatch(getUser(users));
            dispatch(receiveQuestions(questions));
          }).catch((err) => {
            console.error(err);
          });
    }
}