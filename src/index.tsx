import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import "./styles/index.scss";
import App from './App';
import {WeatherService} from "./services";
import * as reducers from "./store/reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    combineReducers(reducers),
    compose(
        applyMiddleware(
            thunk.withExtraArgument(new WeatherService())
        ),
        composeEnhancers
    ));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


