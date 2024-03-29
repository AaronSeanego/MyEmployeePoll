import { RECEIVE_DATA } from '../actions/shared';
import {RECEIVE_QUESTIONS,SAVE_QUESIONS,ADD_QUESTION} from '../actions/questions';

function setOptionData(state = {}, action) {
    console.log(action);
    switch (action.type) {
  
      case SAVE_QUESIONS:
        const { authedUser } = action.questions;
        const { votes } = state;
  
        return { ...state, votes: votes.concat([authedUser]) };
    }
  }
  
  function setQuestionData(state = {}, action) {
    console.log(action);
    switch (action.type) {
  
      case SAVE_QUESIONS:
        const { answer } = action.questions;
  
        return { ...state, [answer]: setOptionData(state[answer], action) };
    }
  }

export function Questions(state = {}, action) {
    console.log(action);
    if(action.type === RECEIVE_QUESTIONS) {
        return {
            ...state,
            ...action.questions
        }
    }else if(action.type === ADD_QUESTION) {
        const { question } = action.questions;
        const  id  = question;
        return {
            ...state,
            [action.questions.id]:action.questions
        }
    }else if(action.type === SAVE_QUESIONS) {
        const { qid } = action.questions;
        return {
            ...state,
            [qid]: setQuestionData(state[qid], action)
        };
        // return {
        //     ...state
        // }
    }else {
        return state;
    }
}

// state.concat([action.questions])