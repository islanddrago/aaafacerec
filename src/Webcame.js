import React, { Component } from 'react';
import Webcam from "react-webcam";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Webcame.css"

const Back = () => <h2></h2>

export default class Navbar extends Component {
        setupTable(){
          var body = JSON.stringify({
              //  'faceListId': 'woweewoo',
                'name': 'faceList'
            });
            console.log(body, body.length);
          // fetch('https://centralus.api.cognitive.microsoft.com/face/v1.0/facelists/reeee', {
          //   method: 'PUT',
          //   headers: {
          //     'Content-Type': 'application/json',
          //     'Ocp-Apim-Subscription-Key': '8fe89af6c1264809aa7cb1178e4a98bd',
          //     'Content-Length': body.length
          //   },
          //   body: body
          // })
          var data = new FormData();
data.append("name", "please");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("PUT", "https://?faceListId=5689&persistedFaceId=959bea80-796c-4403-935c-3a364675bcc6&=");
xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "8fe89af6c1264809aa7cb1178e4a98bd");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "a0ea8a6f-4220-4d88-9b78-ca538115dc67");

xhr.send(data);
          
        }

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
          }).then((data) => data.json())
          .then((json) => {

            console.log(json.url);


          });
          // promise.then((imageSrc))

        };
       
        componentDidMount(){
          this.setupTable();
        }

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
                  screenshotFormat="image/jpeg"
                  width={'100%'}
                  videoConstraints={videoConstraints}
                />
              </div>
              <button className={'button'} onClick={this.capture}>Capture photo</button>
              


              {/* <div id = "awebcam">
                <Link to="/Back" onClick={this.backClicked}>Back</Link>  
                 <a href="#" class="previous round">&#8249;</a> 
                </div> */}
            </div>
          );
        }
      }