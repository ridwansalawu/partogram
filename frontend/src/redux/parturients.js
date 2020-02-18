import * as ActionTypes from "./ActionTypes";


export const Parturients = (state = {
    isLoading: true,
    errMsg: null,
    parturients: []

}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PARTURIENTS:
            return {...state, isLoading: false, errMsg:null, parturients:action.payload}

        case ActionTypes.PARTURIENTS_LOADING:
            return {...state, isLoading: true, errMsg:null, parturients:[]}

        case ActionTypes.PARTURIENTS_FAILED:
            return {...state, isLoading: false, errMsg:action.payload, parturients:[]}

        default:
            return state;
    }

}
