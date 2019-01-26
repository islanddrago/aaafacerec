import React, { Component } from 'react';
import Navbar from './Navbar';
import Webcam from "react-webcam";
import Webcame from './Webcame';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title={'Test Title'} />
        <Webcame></Webcame>
        
      
            </div>
           
    );
  }
}

export default App;
