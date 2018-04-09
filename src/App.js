import React, { Component } from 'react';

import './App.css';
import BreadCrumb from './BreadCrumb';
import Highlight from './Highlight';
import Topics from './Topics';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <BreadCrumb top="บางขุนพรหม" />
        <div className="App-container container">
          <Highlight/>
          <Topics/>
        </div>
      </div>
    );
  }
}

export default App;
