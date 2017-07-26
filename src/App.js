import React, { Component } from 'react';
import logo from './boner.png';
import './App.css';
import MapsView from "./DogParks/MapsView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Boner is a dating app for dogs!
        </p>
        <MapsView/>
      </div>
    );
  }
}

export default App;
