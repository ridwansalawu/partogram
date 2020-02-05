import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../testData/baseUrl";


export const calculateBishop = (parturientId, dilatation, effacement, position, station, descent) => ({
    type: ActionTypes.CALCULATE_BISHOP,
    payload: {
    
        dilatation: dilatation, 
        effacement: effacement,
        position: position,
        station: station,
        descent: descent

    }
});

export const fetchBishops = () => (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(data => dispatch({
                    type: ActionTypes.FETCH_BISHOPS,
                    payload: data

                }))
}

export const addBishops = (bishopData) => dispatch => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(bishopData)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: ActionTypes.ADD_BISHOPS,
            payload: data
        }));


}

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
    
});

export const requestInitialPartograph = (drawTemplate) => ({
    type: ActionTypes.DRAW_PARTOGRAPH_TEMPLATE,
    payload: drawTemplate 
})

export const drawInitialPartograph = (drawTemplate) => (dispatch) => {
    dispatch(requestInitialPartograph(drawTemplate))
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const postUser = (username, password) => (dispatch) => {
    const newSignUp = {
        username: username,
        password: password
    }
    newSignUp.date = new Date().toISOString();
    return fetch(baseUrl + "users", {
        method: "POST",
        body: JSON.stringify(newSignUp),
        header: {
            "Content-Type": "application/json"

        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error("++Error++ "+ response.status + ": " + response.statusText);
            error.response = response;
            throw error;

        }  
    }, 
    error => {
        var errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(response => response.json)
    .then(response => dispatch(addUser(response)))
    .catch(error => {console.log("+++++++++++++++++++ " + error.message)})

}

export const  fetchParturients = () => (dispatch) => {
    dispatch(parturientsLoading(true));
    
   return fetch(baseUrl + "parturients")
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error("++Error++ "+ response.status + ": " + response.statusText);
                error.response = response;
                throw error;

            }  
        }, 
        error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json())
        .then(parturients => dispatch(addParturients(parturients)))
        .catch(error => {
            dispatch(parturientsFailed(error.message));
        })
}

export const parturientsLoading = () => ({
    type: ActionTypes.PARTURIENTS_LOADING
});

export const parturientsFailed = (errMsg) => ({
    type: ActionTypes.PARTURIENTS_FAILED,
    payload: errMsg
})

export const addParturients = (parturients) => ({
    type: ActionTypes.ADD_PARTURIENTS,
    payload: parturients
})


// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


export const bishopsFailed = (errMsg) => ({
    type: ActionTypes.BISHOPS_FAILED,
    payload: errMsg
})




// __________________________________________________________________________________________________________________________
// AUTHENTICATION
// -----------------------------------------------------------------------------------------------------------------------------


export const requestSignup = (details) => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
        details
    }
}

export const signupError = (message) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        message
    }
}



export const requestLogin = (credentials) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        credentials
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const signupUser = (details) => (dispatch) => {
    dispatch(requestSignup(details))

    return fetch(baseUrl + "users/signup", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(details)
    })
    .then(response => {

        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }

    },
    error => {
        throw error;
    }
    ).catch(error => dispatch(signupError(error.message)))




}

export const loginUser = (credentials) => (dispatch) => {
    dispatch(requestLogin(credentials))

    return fetch(baseUrl + "users/login", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText + "_______" + response.message);
            error.response = response;
            console.log(error)
            throw error;
        }
    },
    error => {
        throw error;
    }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("credentials", JSON.stringify(credentials));
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error("****Error " + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))

}

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('credentials');
    dispatch(receiveLogout())
}