import * as ActionTypes from "./ActionTypes";


export const Signup = (state = {
   
    errMsg: null,
    details: []

}, action) => {
    switch(action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {...state, errMsg:null, details:action.payload}

        case ActionTypes.SIGNUP_FAILURE:
            return {...state, errMsg: action.payload}

        default:
            return state;
    }

}