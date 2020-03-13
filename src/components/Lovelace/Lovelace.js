import React, { Component } from 'react';
import fish from './fish.png';
import NavBar from '../NavBar/NavBar';
import Prediction from '../Predictions/Predictions';

import './Lovelace.css';

export default class Lovelace extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Prediction />
        <div className="App">
            <header className="App-header">
            <img src={fish} className="App-logo" alt="logo" />
            </header>
        </div>
    </div>
    );
  }
}
