import * as ActionTypes from "./ActionTypes";
import { PARTURIENTS } from "../testData/parturients";


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

export const  fetchParturients = () => (dispatch) => {
    dispatch(parturientsLoading(true));
    
    setTimeout(() => {
        dispatch(addParturients(PARTURIENTS))
    }, 2000)
}

export const parturientsLoading = () => ({
    type: ActionTypes.PARTURIENTS_LOADING
});

export const parturientsFailed = (errmsg) => ({
    type: ActionTypes.PARTURIENTS_FAILED,
    payload: errmsg
})

export const addParturients = (parturients) => ({
    type: ActionTypes.ADD_PARTURIENTS,
    payload: parturients
})