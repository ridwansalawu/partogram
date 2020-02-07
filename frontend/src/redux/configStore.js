import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Parturients } from "./parturients";
import { drawTemplate } from "./partographTemplate";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {Auth} from "./auth";
import { Bishops } from "./bishops";


export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            signUp: {},
            drawTemplate: drawTemplate,
            parturients: Parturients,
            bishop_params: Bishops,
            auth: Auth

        }),
        compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        
    );
    return store;
}