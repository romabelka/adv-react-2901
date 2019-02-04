import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import store from "./redux";
import history from "./history";
import firebase from "firebase/app";
import { signedIn } from "./ducks/auth";

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(signedIn(user));
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
