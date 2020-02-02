import { createStore, combineReducers, applyMiddleware } from "redux";
import {createForms} from "react-redux-form";
import { Parturients } from "./parturients";
import { AlertLine} from "./alertLine";
import { ActionLine } from "./actionLine";
import { InitialGraph } from "./initialGraph";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback, InitialSignup } from "./forms";
import {Auth} from "./auth";


export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            parturients: Parturients,
            actionLine: ActionLine,
            alertLine: AlertLine,
            initialGraph: InitialGraph,
            auth: Auth,
            ...createForms({
                feedback: InitialFeedback,
                signUp: InitialSignup
            })

        }),
        applyMiddleware(thunk, logger)
        
    );
    return store;
}