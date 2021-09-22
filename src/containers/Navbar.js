import {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Logo from "../images/warbler-logo.png";
import { logout } from "../store/actions/auth.action";

class Navbar extends Component {
    
    logout = e =>{
        e.preventDefault();
        this.props.logout();
    }
    
    render() {
        return(
            <nav className="navbar navbar-expand">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Warbler Home" />
                    </Link>
                </div>
                
                {this.props.currentUser.isAuthenticated ? (
                    <ul className="nav-navbar-nav navbar-right">
                        <li>
                            <Link to={`/users/${this.props.currentUser.id}/messages/new`} >
                                New MessageList
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.logout} >
                                Log out
                            </a>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
    
}

function mapStateToPRops(state){
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToPRops, { logout })(Navbar);