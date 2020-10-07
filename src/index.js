import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import broadcasts from "./redux/broadcasts";
import records from "./redux/records";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducer = combineReducers({ broadcasts: broadcasts, records });

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
