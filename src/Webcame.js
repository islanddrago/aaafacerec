import React, { Component } from 'react';
import Webcam from "react-webcam";

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
            <div>
              <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
                videoConstraints={videoConstraints}
              />
              <button onClick={this.capture}>Capture photo</button>
            </div>
          );
        }
      }