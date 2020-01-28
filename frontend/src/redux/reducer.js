import { PARTURIENTS, ACTION_LINE, ALERT_LINE, INITIAL_GRAPH } from "../testData/parturients";

export const initialState = {
    parturients: PARTURIENTS,
    selectedParturient: null,
    initial_graph : INITIAL_GRAPH,
    alert_line: ALERT_LINE,
    action_line: ACTION_LINE
  };



  

export const Reducer = (state=initialState, action) => {
    return state;
}