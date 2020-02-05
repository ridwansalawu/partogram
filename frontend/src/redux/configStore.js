import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createForms, combineForms } from "react-redux-form";
import { Parturients } from "./parturients";
import { drawTemplate } from "./partographTemplate";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback, InitialSignup } from "./forms";
import {Auth} from "./auth";
import { Bishops } from "./bishops";


export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            // signUp: userDeatails,
            drawTemplate: drawTemplate,
            parturients: Parturients,
            bishop_params: Bishops,
            auth: Auth,
            ...createForms({
                
                signUp: InitialSignup
            })

        }),
        compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        
    );
    return store;
}