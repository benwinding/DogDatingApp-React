import React, { Component } from 'react';
import './App.css';
import GoogleLogin from "react-google-login";
import Center from 'react-center';

const responseGoogle = (response) => {
  console.log(response);
};

export default class App extends Component {
  render() {

    return (
      <div className="Login-screen">
        <Center
          style={{width:"100vw", height:"100vh"}}>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Center>
      </div>
    );
  }
}
