import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import auth from './auth';

export default combineReducers({
    tasksReducer,
    auth
});