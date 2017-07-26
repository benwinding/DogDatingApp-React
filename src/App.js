import React, { Component } from 'react';
import './App.css';
import GoogleLogin from "react-google-login";
import Center from 'react-center';

const responseGoogle = (response) => {
  console.log(response);
};

export default class App extends Component {
  render() {
    // let clipId = "IGJCx2ug0lU";
    let youTubeString = "https://www.youtube.com/embed/IGJCx2ug0lU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=IGJCx2ug0lU";
    return (
      <div>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              src={youTubeString}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div id="vidtop-content">
          <div className="vid-info">
            <div className="Login-screen">
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
