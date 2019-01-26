import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            json: undefined,
        };
    }

    fetchData() {
        let promise = fetch('http://localhost:5000/test');
        promise.then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({ json });
        });
        promise.catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100px', top: 0, left: 0 }}>
                <h1>hiiii</h1>
                <p>{this.props.title}</p>
                <button onClick={() => {
                    this.fetchData();
                }}>Click me</button>
                <p>{JSON.stringify(this.state.json)}</p>
            </div>
        );
    }
} 
