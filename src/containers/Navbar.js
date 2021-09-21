import {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
    
    render() {
        return(
            <nav className="navbar navbar-expand">
                <div className="continer-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    
}

function mapStateToPRops(state){
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToPRops, null)(Navbar);