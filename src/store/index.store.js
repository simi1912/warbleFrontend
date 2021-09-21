import rootReducer from "./reducers/index.reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export function configureStore(){
    const store = createStore(rootReducer, 
        compose(
            applyMiddleware(thunk),
            window.devToolExtension ? window.devToolExtension() : f => f
        )
    );
    
    return store;
}

