import axios from 'axios';

// Check token & load user
export const loadUser = () => (dispatch,getState) => {
    dispatch({type: "USER_LOADING"});

    // Get token from redux state
    const token = getState().auth.token;

    // Set Headers
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    // Add headers config if there is token
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    // Get user
    axios.get('api/user/auth',config)
        .then(res=>{
            dispatch({
                type:"USER_LOADED",
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                type: "AUTH_ERROR"
            })
        })
}


// Login User
export const login = (username,password) => dispatch => {

    // Set Headers
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }


    // Request Body 
    const body = JSON.stringify({username,password});

    // Get user
    axios.post('api/user/login', body, config)
        .then(res=>{
            dispatch({
                type:"LOGIN_SUCCESS",
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                type: "LOGIN_FAIL"
            })
        })
}


// Logout User
export const logout = () => (dispatch,getState) => {

    // Get token from redux state
    const token = getState().auth.token;

    // Set Headers
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    // Add headers config if there is token
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    // Get user
    axios.post('api/user/logout/',null,config)
        .then(res=>{
            dispatch({
                type:"LOGOUT_SUCCESS"
            })
        })
        .catch(err=>console.log(err))
}

 