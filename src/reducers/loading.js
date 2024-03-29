import {RECEIVE_DATA} from '../actions/shared';

export const loading = (state = true, action) => {
    if(action.type === RECEIVE_DATA) {
        return false;
    }else {
        return state;
    }
}