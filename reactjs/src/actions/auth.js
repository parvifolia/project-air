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