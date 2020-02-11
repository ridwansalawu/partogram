import * as ActionTypes from "./ActionTypes";


export const setRefer = (state = {
   
  refer: false

}, action) => {
    switch(action.type) {
       

        case ActionTypes.SET_REFER:
            return {...state, refer: action.payload}

        default:
            return state;
    }

}