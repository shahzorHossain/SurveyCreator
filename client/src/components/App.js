import React, { Component } from "react";
import logo from "../logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import "../App.css";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2> We are in Survey List page </h2>;
};
const SurveyList = () => {
  return <h2> Survey List </h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
