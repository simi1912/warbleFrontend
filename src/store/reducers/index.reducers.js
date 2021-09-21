import { combineReducers } from "redux";
import currentUser from "./currentUser.reducer.js";
import errors from ".errors";

const rootReducer = combineReducers({
    currentUser,
    errors
});

export default rootReducer;
