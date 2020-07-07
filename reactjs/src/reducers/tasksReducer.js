const initialState = {
    tasks : []
}

export default function (state=initialState,action) {
    if (action.type ==='GET_TASKS') {
        return {
            ...state,
            tasks: action.payload
        }
    }
    else if (action.type ==='DELETE_TASKS') {
        return {
            ...state,
            tasks:state.tasks.filter(e=>e.id != action.payload)
        }
    }
    else if (action.type ==='ADD_TASK') {
        return {
            ...state,
            tasks:[...state.tasks, action.payload]
        }
    }
    else if (action.type ==='UPDATE_TASK') {
        return {
            ...state,
            tasks:[...state.tasks, action.payload]
        }
    }
    return state;
}