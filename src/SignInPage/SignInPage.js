import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
import logo from '../boner.png';
import './SignInPage.css';

const responseGoogle = (response) => {
  console.log(response);
};

export default class SignInPage extends Component {
  render() {
    let youTubeString = "https://www.youtube.com/embed/IGJCx2ug0lU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=IGJCx2ug0lU";
    return (
      <div>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              src={youTubeString}
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>

        <div id="vidtop-content">
          <div className="vid-info">
            <div style={{"padding-bottom":10}}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Google Sign In"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
}
