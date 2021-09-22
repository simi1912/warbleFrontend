import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import MessageList from "../continers/MessageList";

const MessageTimeLine = props => {
    return (
        <div className="row">
            <MessageList />
        </div>
    );
};

export default MessageTimeLine;