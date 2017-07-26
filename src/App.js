import React, { Component } from 'react';
import './App.css';
import SignInPage from "./SignInPage/SignInPage";
import PuppyProfile from "./ProfileCreator/PuppyProfile";

export default class App extends Component {
  render() {
    return (
      <div>
        {/*<SignInPage/>*/}
        <PuppyProfile/>
      </div>
    );
  }
}
