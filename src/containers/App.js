import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import {configureStore} from "../store/index.store";
import Navbar from "./Navbar";

const store = configureStore();

const App = function App() {
  return (
    <Provider store={store}>
      <Router>
        <div classNAme="onboarding">
          <Navbar />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
