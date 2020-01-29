import * as ActionTypes from "./ActionTypes";


export const Bishops = (state = {
   
    errMsg: null,
    bishops: []

}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_BISHOPS:
            return {...state, errMsg:null, bishops:action.payload}

        case ActionTypes.BISHOPS_FAILED:
            return {...state, errMsg: action.payload}

        case ActionTypes.ADD_BISHOP:
            var bishop = action.payload;
            bishop.id = state.bishops.length;
            bishop.date = new Date().toISOString();
            return {...state, bishops: state.bishops.concat(bishop)}


        default:
            return state;
    }

}