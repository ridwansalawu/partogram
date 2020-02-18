import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Parturients } from "./parturients";
import { drawTemplate } from "./partographTemplate";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Auth} from "./auth";

export const ConfigStore = () => { 
    const store = createStore(
        combineReducers({
            signUp: {},
            drawTemplate: drawTemplate,
            parturients: Parturients,
            auth: Auth
        }),
        compose(applyMiddleware(thunk, logger)
        // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) 
    );
    return store;
}