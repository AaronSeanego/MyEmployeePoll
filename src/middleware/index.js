import { applyMiddleware } from 'redux';
import {logger} from './logs';
import {validation} from './validation';
import { thunk } from 'redux-thunk';

export default applyMiddleware(thunk, logger);