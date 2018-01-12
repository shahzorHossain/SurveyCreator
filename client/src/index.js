import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import "materialize-css/dist/css/materialize.min.css";
//import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
//makes a variable materializeCSS

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
console.log("The STRIPE KEY is ", process.env.REACT_APP_STRIPE_KEY);

console.log("The environment is ", process.env.NODE_ENV);
registerServiceWorker();
