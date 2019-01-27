import React, { Component } from 'react';
import Webcam from "react-webcam";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Webcame.css"
// eslint-disable-next-line
const Back = () => <h2></h2>

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  findsimilars(faceId) {
    console.log('faceId: ', faceId);
    return fetch('https://centralus.api.cognitive.microsoft.com/face/v1.0/findsimilars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '8fe89af6c1264809aa7cb1178e4a98bd',
      },
      body: JSON.stringify({
        "faceId": faceId,
        "faceListId": "25",
        "maxNumOfCandidatesReturned": 1,
        "mode": "matchPerson"
      })
    })
  }

  detect(faceUrl) {
    return fetch('https://centralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '8fe89af6c1264809aa7cb1178e4a98bd',
      },
      body: JSON.stringify({
        url: faceUrl
      })
    });
  }

  findUserData(faceId) {
    return fetch('https://centralus.api.cognitive.microsoft.com/face/v1.0/facelists/25', {
      headers: {
        'Ocp-Apim-Subscription-Key': '8fe89af6c1264809aa7cb1178e4a98bd',
      },
    })
    .then((response) => response.json())
    .then(json => {
      let item = json.persistedFaces.find(elem => elem.persistedFaceId === faceId);
      return item.persistedFaceId;
    });
  }

  login(faceUrl) {
    this.detect(faceUrl)
      .then(response => response.json())
      .then(json => {
        console.log('json: ', json);
        return this.findsimilars(json[0].faceId)
          .then(response => response.json())
          .then(json => json[0])
          .then(json => {
            console.log('findsimilars: ', json);
            
            if (json && json.confidence > .65) {
              if (json.persistedFaceId) {
                return this.findUserData(json.persistedFaceId);
              }
            }
            else {
              console.log("No match. Are you sure you have an account with us?")
            }
          })
      })
      .then(userData => {
        this.setState({ userName: userData });
      });
  }

  register(faceUrl, userName) {
    fetch('https://centralus.api.cognitive.microsoft.com/face/v1.0/facelists/25/persistedFaces?userData=' + userName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '8fe89af6c1264809aa7cb1178e4a98bd',
      },
      body: JSON.stringify({
        url: faceUrl
      })
    });
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    // console.log(imageSrc);
    // eslint-disable-next-line
    let promise = fetch('http://localhost:5000/tradeinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: imageSrc
      })
    }).then((data) => data.json())
      .then((json) => {
        if (this.props.signup) {
          this.register(json.url, this.state.userName);
        }
        else {
          this.login(json.url);
        }
        console.log(json.url);


      });
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
            screenshotFormat="image/jpeg"
            width={'100%'}
            videoConstraints={videoConstraints}
          />
        </div>
        <p>{'User name: ' + `${this.state.userName}`}</p>
        <button className={'button'} onClick={this.capture}>Capture photo</button>



        {/* <div id = "awebcam">
                <Link to="/Back" onClick={this.backClicked}>Back</Link>  
                 <a href="#" class="previous round">&#8249;</a> 
                </div> */}
      </div>
    );
  }
}