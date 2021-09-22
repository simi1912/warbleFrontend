import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";

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
                <h1>You made it</h1>
            </div>
        )
    }
    
}

export default Homepage;