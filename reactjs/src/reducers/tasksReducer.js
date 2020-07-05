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
    return state;
}