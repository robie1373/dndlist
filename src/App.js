import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './datafiles/all_WotC_pub_UA.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class DnDList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArmourList:  {}
    }
  }

  render() {
    return (
      <div className="DnDList">
        <h2 >list goes here</h2>
      </div>
    )
  }
}

export default App;
