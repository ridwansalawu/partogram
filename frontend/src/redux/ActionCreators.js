import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../testData/baseUrl"


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
export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
    
});

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

export const  fetchBishops = () => (dispatch) => {
   return fetch(baseUrl + "bishops")
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
        .then(bishops => dispatch(addBishops(bishops)))
        .catch(error => dispatch(bishopsFailed(error.message)))
        }

// export const parturientsLoading = () => ({
//     type: ActionTypes.PARTURIENTS_LOADING
// });

export const bishopsFailed = (errMsg) => ({
    type: ActionTypes.BISHOPS_FAILED,
    payload: errMsg
})

export const addBishops = (bishops) => ({
    type: ActionTypes.ADD_BISHOPS,
    payload: bishops
})