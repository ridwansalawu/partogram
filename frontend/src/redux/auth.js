
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isFetching: false,
  error: null
};

// ===============================
// Action Types
// ===============================
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

// ===============================
// Reducer
// ===============================
export const Auth = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.user,
        token: action.token
      };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

// ===============================
// Async Action Creators
// ===============================
export const loginUser = (credentials) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post("http://localhost:5001/users/login", credentials);
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    dispatch({ type: LOGIN_SUCCESS, user, token });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, error: err.response?.data || err.message });
  }
};

export const signupUser = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post("http://localhost:5001/users/signup", { username, password });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    dispatch({ type: LOGIN_SUCCESS, user, token });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, error: err.response?.data || err.message });
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
