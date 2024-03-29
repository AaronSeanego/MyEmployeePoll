import { RECEIVE_DATA } from '../actions/shared';
import {GET_USER,ADD_USER,LOG_IN} from '../actions/login';
import {SetAuthedUser,setAuthedUser} from '../actions/authedUser';
export function authedUser(state = null, action) {
    console.log(action);
    if(action.type === SetAuthedUser) {
        return action.id;
    }else {
        return state;
    }
}