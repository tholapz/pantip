import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import BreadCrumb from './BreadCrumb';
import Room from "./Room";
import Topic from "./Topic";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <BreadCrumb top="บางขุนพรหม" />

          <Route exact path="/" component={Room} />
          <Route path="/topic/:topicid" component={Topic} />
        </div>
      </Router>
    );
  }
}

export default App;
