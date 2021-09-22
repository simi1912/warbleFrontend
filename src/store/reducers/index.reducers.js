import { combineReducers } from "redux";
import currentUser from "./currentUser.reducer.js";
import errors from "./errors.reducer";
import messages from "./messages.reduces";

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages
});

export default rootReducer;
