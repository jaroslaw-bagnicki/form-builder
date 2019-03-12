import { combineReducers } from 'redux';
import  templateReducer from './templateReducer';

export default combineReducers({ template: templateReducer });
