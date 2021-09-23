import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";
import DEfaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img 
                    src={profileImageUrl || DEfaultProfileImg} 
                    alt={username}
                    width= "200"
                    height= "200"
                    className="img-thumbnail"
                />
            </div>
        </div>
    </aside>
);

export default UserAside;
