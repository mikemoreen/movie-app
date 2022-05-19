import { combineReducers } from 'redux';

import cards from './cards';
import auth from './auth';

export const reducers = combineReducers({ cards, auth });