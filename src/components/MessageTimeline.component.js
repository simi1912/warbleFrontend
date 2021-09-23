import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside.component";

const MessageTimeLine = props => {
    return (
        <div className="row">
            <UserAside 
                profileImageUrl={props.profileImageUrl}
                username={props.username}    
            />
            <MessageList />
        </div>
    );
};

export default MessageTimeLine;