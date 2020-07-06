import axios from 'axios';
import {tokenConfig} from './auth'

// GET_TASKS Action
export const getTasks = () => (dispatch,getState) => {
    axios.get('/api/tasks/',tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "GET_TASKS",
            payload : res.data,
        });
    })  
    .catch(err=>console.log(err))
}

// ADD_TASK Action
export const addTask = (task) => (dispatch,getState) => {
    axios.post('/api/tasks/',task,tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "ADD_TASK",
            payload : res.data,
        });
    })  
    .catch(err=>console.log(err))
}

// DELETE_TASK Action
export const deleteTask = (id) => (dispatch,getState) => {
    axios.delete(`/api/tasks/${id}/`,tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "DELETE_TASKS",
            payload : id,
        });
    })  
    .catch(err=>console.log(err))
}



