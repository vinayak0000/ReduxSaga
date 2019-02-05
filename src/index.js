import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import allReducers from "./reducers/allReducers";
import rootSaga from "./sagas/sagas";
import Layout from "./components/Layout";

const app = document.getElementById("app");

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  rootElement
);
//https://medium.com/@gethylgeorge/using-redux-saga-to-handle-side-effects-and-testing-it-using-jest-2dff2d59f899
