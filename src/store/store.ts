import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as rootReducer from "./rootReducer";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const composeEnhancers: any =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  combineReducers(rootReducer),
  compose(applyMiddleware(thunk), composeEnhancers)
);
