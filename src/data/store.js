import {legacy_createStore} from 'redux';
import combineReducers from'../reducers/index';
import applyMiddleware from '../middleware/index';

const store = legacy_createStore(combineReducers,applyMiddleware);

export default store;