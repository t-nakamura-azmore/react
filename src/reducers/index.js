import{ combineReducers } from 'redux';
import{ reducer as form } from 'redux-form';
import memos from './memo';

export default combineReducers({memos,form});
