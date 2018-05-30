import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from "./components/facebook"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facebook Authentication</h1>
        </header>
        <p className="App-intro">
          Authentication via Facebook auth.
        </p>
        <Facebook />
      </div>
    );
  }
}

export default App;
