const initialState = {
    token : localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user:null
}

export default function (state = initialState, action) {
    if (action.type === "USER_LOADING"){
        return {
            ...state,
            isLoading: true
        }
    }
    else if (action.type === "USER_LOADED"){
        return {
            ...state,
            isAuthenticated:true,
            isLoading: true,
            user: action.payload
        }
    }
    // remove token from local storage and set everthing to default initialState
    else if (action.type === "AUTH_ERROR"){
        localStorage.removeItem("token");
        return {
            ...state,
            token: null,
            isAuthenticated:false,
            isLoading: false,
            user:null,
        }
    }
    else {
        return state;
    }
}