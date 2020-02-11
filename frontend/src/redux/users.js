import * as ActionTypes from "./ActionTypes";


export const Users = (state = {
   
    errMsg: null,
    users: []
    
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_USERS:
            return {...state, errMsg:null, users:action.payload}

        case ActionTypes.USERS_FAILED:
            return {...state, errMsg: action.payload}

        case ActionTypes.ADD_USER:
            var user = action.payload;
            user.id = state.users.length;
           
            return {...state, users: state.users.concat(user)}


        default:
            return state;
    }

}