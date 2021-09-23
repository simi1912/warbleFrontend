import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";
import MessageTimeline from "./MessageTimeline.component";

const Homepage = ( { currentUser }) => {
    if(!currentUser.isAuthenticated){
        return (
           <div className="home-hero">
                <h1>What's Happening?</h1>
                <h4>New to Warbler?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Sign up here
                </Link>
            </div> 
        );
    } else {
        return (
            <div>
                <MessageTimeline
                    profileImageUrl={currentUser.user.profileImageUrl}
                    username={currentUser.user.username}
                /> 
            </div>
        )
    }
    
}

export default Homepage;