import {apiCall} from "../../services/api.service";
import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionsTypes";
import { addError, removeError } from "./errors.action";

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGES,
    id
});

export const removeMessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
            .then( () => dispatch(remove(message_id)) )
            .catch( (e) => addError(e.message));
    };
};

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

export const postNewMessage = text => (dispatch, getState) => {
    const {currentUser} = getState();
    const id = currentUser.user.id;
    
    return apiCall("post", `/api/users/${id}/messages`, {text})
        .then( (res) => {})
        .catch( err => dispatch(addError(err.message)));
};

