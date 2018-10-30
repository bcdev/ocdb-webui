import {combineReducers} from 'redux';
import {State} from '../types/state';
import {controlReducer} from './controlReducer';

export const reducers = combineReducers<State>({
                                                   control: controlReducer
                                               });