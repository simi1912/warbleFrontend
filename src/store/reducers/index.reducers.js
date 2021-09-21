import { combineReducers } from "redux";
import currentUser from "./currentUser.reducer.js";
import errors from "./errors.reducer";

const rootReducer = combineReducers({
    currentUser,
    errors
});

export default rootReducer;
