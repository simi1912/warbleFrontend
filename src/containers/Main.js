import {Component} from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage.component";

const Main = propss => {
    return (
        <div className="container">
            <Switch>
                <Route exct path="/" render={ props => <Homepage {...props}/> } />
            </Switch>
        </div>
    );
};

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
    };
}

export default withRouter(connect(mapStateToProps, null)(Main));