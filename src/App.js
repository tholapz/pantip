import React, { Component } from 'react';

import './App.css';
import Highlight from './Highlight';
import BreadCrumb from './BreadCrumb';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div className="App-container container">
          <BreadCrumb top="บางขุนพรหม"/>
          <Highlight/>
        </div>
      </div>
    );
  }
}

export default App;
