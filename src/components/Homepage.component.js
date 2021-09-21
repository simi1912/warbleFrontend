import {Component} from "react";
import {Switch, Route, withRouter, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";

const Homepage = () => (
    <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
            Sign up here
        </Link>
    </div>
)

export default Homepage;