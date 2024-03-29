import {GET_USER,ADD_USER,LOG_IN,getUser,logIn} from '../actions/login';
import { RECEIVE_DATA } from '../actions/shared';
import {RECEIVE_QUESTIONS,SAVE_QUESIONS,UPDATE_QUESIONS,ADD_QUESTION} from '../actions/questions';
import {receiveQuestions,addQuestions} from '../actions/questions';

export const validation = (store) => (next) => (action) => {
    console.log(action);
    
    if(action.type === RECEIVE_QUESTIONS) {
        return next(receiveQuestions(action.questions));
    }

    if(action.type === RECEIVE_DATA) {
        return next(getUser(action.users));
    }
    
    if(action.type === RECEIVE_QUESTIONS) {
        return next(receiveQuestions(action.questions));
    }else if(action.type === ADD_QUESTION && action.questions.author == "") {
        return alert("Author is missing. Try again later");
    }else if(action.type === ADD_QUESTION && (action.questions.optionOne.text == "" || action.questions.optionTwo.text == "")) {
        return alert("Option is missing. Try again later");
    }else {
        return next(addQuestions(action.questions))
    }

    if(action.type === LOG_IN && (action.username == '' || undefined)) {
        return alert("Please enter your username and password!!!");
    }else if(action.type === LOG_IN && action.username == '' || undefined) {
        return alert("Please enter your username!!!");
    }else if(action.type === LOG_IN && action.password == '' || undefined) {
        return alert("Please enter your password!!!");
    }else {
        return next(logIn(action.username))
    }
}