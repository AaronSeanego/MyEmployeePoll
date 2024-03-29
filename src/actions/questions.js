import * as API from '../data/_DATA';
import { RECEIVE_DATA } from '../actions/shared';
import {updateUsersQuestions} from '../actions/login';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESIONS = 'SAVE_QUESIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const UPDATE_QUESIONS = 'UPDATE_QUESIONS';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestions(questions) {
    console.log(questions);
    return {
        type: SAVE_QUESIONS,
        questions
    }
}

export function addQuestions(questions) {
    return {
        type: ADD_QUESTION,
        questions
    }
}

export function updateQuestions(questions) {
    return {
        type: UPDATE_QUESIONS,
        questions
    }
}

export function handleReceiveQuestions() {
    return (dispatch) => {
        return API._getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions));
        }).catch((err) => {
            console.error(err);
        });
    }
}

export function handleAddNewQuestions(polls) {
    console.log(polls);
    return (dispatch) => {
        return API._saveQuestion(polls).then((questions) => {
            dispatch(addQuestions(questions));
            dispatch(updateUsersQuestions(questions));
            // console.log(questions);
        })
    }
}

export function handleSaveQuestionsAnswer({authedUser,qid,answer}) {
    return (dispatch) => {
        return API._saveQuestionAnswer({authedUser,qid,answer}).then((questions) => {
            dispatch(saveQuestions({authedUser,qid,answer}));
            console.log(questions);
        })
    }
}