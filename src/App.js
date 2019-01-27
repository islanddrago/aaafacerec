import React, { Component } from 'react';
import logo from './aaLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>
const Signup = () => <h2>Sign Up</h2>
const Signin = () => <h2>Sign In</h2>

class App extends Component {

    signinClicked(){
      return(
        <div>
          <h1>Test</h1>
        </div>
      );
    }
    
    signupClicked(){
      return(
        <div>
          <h1>Test</h1>
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
          <Route exact={true} path='/Signup' render={() => (
            <div className="App">
              <Signup/>
            </div>
          )}/>
          <Route exact path='/Signin' component={this.signinClicked}/>
          <Route exact={true} path='/Signin' render={() => (
            <div className="App">
              <Signin/>
            </div>
          )}/>
        </div>
      </Router>
    // <Router>
    //   <div className="App">
    //       <img src={logo} className="App-logo" alt="logo"/>
    //       <div className="ButtonDiv">
    //         <Link to="/register" onClick={this.registerClicked}>Register</Link>  
    //         <Link to="/signIn" onClick={this.signInClicked}>Sign In</Link>
    //       </div>
    //     <Route path="/" exact component={Index} />
    //   <Route path="/about/" component={register} />
    //   <Route path="/users/" component={signIn} />
    //   </div>
    // </Router>
    );
  }
}

export default App;
