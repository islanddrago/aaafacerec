import React, { Component } from 'react';
import Navbar from './Navbar';
import logo from './aaLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo"/>
          <div className="ButtonDiv">
            <button id="registerButton" onClick={this.register}>Register</button>
            <button id="signInButton" onClick={this.signIn}>Sign In</button>
          </div>
      </div>
    );
  }
}

export default App;
