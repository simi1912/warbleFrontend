import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import {configureStore} from "../store/index.store";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

const App = function App() {
  return (
    <Provider store={store}>
      <Router>
        <div classNAme="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
