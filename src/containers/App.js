import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import jwtDecode from "jwt-decode";

import {configureStore} from "../store/index.store";
import Navbar from "./Navbar";
import Main from "./Main";

import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth.action";

const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e){
    store.dispatch(setCurrentUser({}));
  }
}

const App = function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
