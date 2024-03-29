import { combineReducers } from 'redux';
// import { getUsers } from "./reducers/login";
import {getUsers} from './login';
import {loading} from './loading';
import {authedUser} from './authUser';
import {Questions} from './questions';

export default combineReducers({authedUser,getUsers,Questions,loading});