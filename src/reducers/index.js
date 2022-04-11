import counterReducer from "./counter";
import isLoggedIn from "./isLogged";
import { combineReducers } from "redux";

// Pass all of reducers inside of combineReducers function as objects
export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedIn,
});
