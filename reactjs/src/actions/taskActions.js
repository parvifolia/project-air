import axios from 'axios';

// GET_TASKS Action
export const getTasks = () => dispatch => {
    axios.get('/api/tasks/')
    .then(res=>{
        dispatch({
            type : "GET_TASKS",
            payload : res.data,
        });
    })  
    .catch(err=>console.log(err))
}

// ADD_TASK Action
export const addTask = (task) => dispatch => {
    axios.post('/api/tasks/',task)
    .then(res=>{
        dispatch({
            type : "ADD_TASK",
            payload : res.data,
        });
    })  
    .catch(err=>console.log(err))
}

// DELETE_TASK Action
export const deleteTask = (id) => dispatch => {
    axios.delete(`/api/tasks/${id}/`)
    .then(res=>{
        dispatch({
            type : "DELETE_TASKS",
            payload : id,
        });
    })  
    .catch(err=>console.log(err))
}

