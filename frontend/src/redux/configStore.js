import { createStore, combineReducers } from "redux";
import { Parturients } from "./parturients";
import { AlertLine} from "./alertLine";
import { ActionLine } from "./actionLine";
import { InitialGraph } from "./initialGraph";

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            parturients: Parturients,
            actionLine: ActionLine,
            alertLine: AlertLine,
            initialGraph: InitialGraph

        })
        
    );
    return store;
}