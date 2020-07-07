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
        // Find the target taks & replace updated task instead
        let updatedStateTasks = state.tasks.map(e=>{
            if (e.id == action.payload.id) {
                return action.payload
            }
            else{
                return e
            }
        })

        return {
            ...state,
            tasks:updatedStateTasks
        }
    }
    return state;
}