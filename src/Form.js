import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Webcame';
export default class Form extends React.Component{
    state = {
        firstName:'',
        lastName:'',
        email:'',
        AAdvantage:'',
    }
    render(){
        return(
            <form>
                <input placeholder='First name' 
                value={this.state.firstName} 
                onChange={e => this.setState({ firstName: e.target.value})} />
                <input placeholder='Last name' 
                value={this.state.lastName} 
                onChange={e => this.setState({ lastName: e.target.value})} />
                <input placeholder='Email' 
                value={this.state.email} 
                onChange={e => this.setState({ email: e.target.value})} />
                <input placeholder='AAdvantage number' 
                value={this.state.AAdvantage} 
                onChange={e => this.setState({ AAdvantage: e.target.value})} />
                <Navbar></Navbar>
                 <Link to="/" onClick={this.signupClicked}>submit</Link>
            </form>
        );
    }
}