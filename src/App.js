import React, { Component } from 'react';
import logo from './aaLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Webcame';
import Form from './Form.js';

const Index = () => <h2></h2>

class App extends Component {
  
    signinClicked(){
      return(
        <div>
           <Navbar signin>  
          </Navbar>
        </div>
      );
    }
    
    signupClicked(){
      return(
        <div>
          <Form/>
          <div> 
          </div>
          
        </div>
        
      );
      console.log('test')
    }

    render(){
    return (
      <Router>
        <div>
          <Route exact={true} path='/testing' component={this.signinClicked}/>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Index/>
              <img src={logo} className="App-logo" alt="logo"/>
              <div className="ButtonDiv">
                <Link to="/Signup" onClick={this.signupClicked}>Sign Up</Link>  
                <Link to="/Signin" onClick={this.signinClicked}>Sign In</Link>
              </div>
            </div>
          )}/>
          <Route exact path='/Signup' component={this.signupClicked}/>
          <Route exact path='/Signin' component={this.signinClicked}/>
        </div>
      </Router>
    );
  }
}

export default App;
