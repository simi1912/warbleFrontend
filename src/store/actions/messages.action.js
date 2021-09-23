import {apiCall} from "../../services/api.service";
import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionsTypes";
import { addError, removeError } from "./errors.action";

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("get", "/api/messages")
            .then( res =>
                dispatch(loadMessages(res))
            ).catch( e => 
                addError(e.message)
            );
    };
};