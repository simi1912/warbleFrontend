import {Component} from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage.component";
import AuthForm from "../components/AuthForm.component";
import {authUser} from "../store/actions/auth.action";
import {removeError} from "../store/actions/errors.action";
import withAuth from "../hocs/withAuth.hocs";
import MessageForm from "../containers/MessageForm";

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={ props => 
                            <Homepage 
                                currentUser={currentUser} 
                                {...props}
                            /> 
                    } 
                 />
                <Route exact path="/signin" render={ props => {
                        return(
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser} 
                                buttonText="Log in" 
                                heading="Welcome back." 
                                {...props}
                            />
                        );
                    }
                }/>
                <Route exact path="/signup" render={ props => {
                        return(
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser} 
                                signup 
                                buttonText="Sign up" 
                                heading="Join Warbler Today." 
                                {...props}
                            />
                        );
                    }
                }/>
                <Route exact path="/users/:id/messages/new" component={withAuth(MessageForm)}
                />
            </Switch>
        </div>
    );
};

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));