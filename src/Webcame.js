import React, { Component } from 'react';
import Webcam from "react-webcam";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Webcame.css"

const Back = () => <h2></h2>
export default class Navbar extends Component {
        setRef = webcam => {
          this.webcam = webcam;
        };

        capture = () => {
          const imageSrc = this.webcam.getScreenshot();
         // console.log(imageSrc);
          let promise = fetch('http://localhost:5000/tradeinfo',{
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  image: imageSrc
              })
          }).then(() => {})
          // promise.then((imageSrc))

        };
       
        render() {
          const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };
       
          return (
            
            <div className={'container'}>
              <div className={'webcam'}>
                <Webcam
                  audio={false}
                  height={'100%'}
                  ref={this.setRef}
                  screenshotFormat="image/jpe`g"
                  width={'100%'}
                  videoConstraints={videoConstraints}
                />
              </div>
              <button className={'button'} onClick={this.capture}>Capture photo</button>

            </div>
          );
        }
      }