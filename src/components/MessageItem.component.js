import {Component} from "react";
import Moment from "react-moment";
import DefaultProfileImg from "../images/default-profile-image.jpg";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";

const MessageItem = ({date, profileImageUrl, text, username, removeMessage , isCorrectUser}) => (
    <div>
        <li className="list-group-item">
            <img 
                src={profileImageUrl || DefaultProfileImg} 
                alt={username} 
                height="100" 
                width="100" 
                className="timeline-img"
            />
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>
                    {text}
                </p>
                {isCorrectUser && ( 
                    <a 
                        className="btn btn-danger" 
                        onClick={removeMessage}
                    > 
                        Delete 
                    </a>
                )}
                
            </div>
        </li>
    </div>
);

export default MessageItem;
    
