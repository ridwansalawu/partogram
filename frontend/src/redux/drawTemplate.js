import * as ActionTypes from "./ActionTypes";
import { drawTemplate } from "./partographTemplate";


export const DrawTemplate = (state = drawTemplate, action) => {
    switch(action.type) {
        case ActionTypes.DRAW_PARTOGRAPH_TEMPLATE:
            console.log("template======")
            return {...state, drawTemplate:action.payload}

        

        default:
            return state;
    }

}