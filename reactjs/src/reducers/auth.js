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
            isLoading: true,
        }
    }
    else if (action.type === "USER_LOADED"){
        return {
            ...state,
            isAuthenticated:true,
            isLoading: false,
            user: action.payload
        }
    }
    // remove token from local storage and set everthing to default initialState
    else if ( 
        (action.type === "AUTH_ERROR") 
        || (action.type === "LOGIN_FAIL") 
        || (action.type === "LOGOUT_SUCCESS")
        || (action.type === "REGISTER_FAIL")
        ){
        localStorage.removeItem("token");
        return {
            ...state,
            token: null,
            isAuthenticated:false,
            isLoading: false,
            user:null,
        }
    }
    // user login or register, put token to local storage
    else if (
        (action.type === "LOGIN_SUCCESS") 
        || (action.type === "REGISTER_SUCCESS")  
        ){
        localStorage.setItem("token",action.payload.token);
        return {
            ...state,
            ...action.payload,
            isAuthenticated:true,
            isLoading:false,
        }
    }
    else {
        return state;
    }
}