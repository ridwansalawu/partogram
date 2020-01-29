import { createStore, combineReducers, applyMiddleware } from "redux";
import { Parturients } from "./parturients";
import { AlertLine} from "./alertLine";
import { ActionLine } from "./actionLine";
import { InitialGraph } from "./initialGraph";
import thunk from "redux-thunk";
import logger from "redux-logger";


export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            parturients: Parturients,
            actionLine: ActionLine,
            alertLine: AlertLine,
            initialGraph: InitialGraph

        }),
        applyMiddleware(thunk, logger)
        
    );
    return store;
}