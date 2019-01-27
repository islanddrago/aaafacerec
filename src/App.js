import React, { Component } from 'react';
import logo from './aaLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Navbar from './Webcame'
=======
import Navbar from './Webcame';
>>>>>>> 36d71beb6c7a90ced4b8b2e412f90eef8d12d624

const Index = () => <h2></h2>
const Signup = () => <h2>Sign Up</h2>
const Signin = () => <h2>Sign In</h2>

class App extends Component {
  
    signinClicked(){
      return(
        <div>
<<<<<<< HEAD
          <Navbar></Navbar>
          <h1>Test</h1>
=======
           <Navbar>  
          </Navbar>
>>>>>>> 36d71beb6c7a90ced4b8b2e412f90eef8d12d624
        </div>
      );
    }
    
    signupClicked(){
      return(
        <div>
          <Navbar>  
          </Navbar>
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
          {/* <Route exact={true} path='/Signup' render={() => (
            <div className="App">
              <Signup/>
            </div>
          )}/> */}
          <Route exact path='/Signin' component={this.signinClicked}/>
          {/* <Route exact={true} path='/Signin' render={() => (
            <div className="App">
              <Signin/>
            </div>
          )}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
