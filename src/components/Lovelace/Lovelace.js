import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap'
import fish from './fish.png';
import NabBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lovelace.css';

export default class Lovelace extends Component {
  render() {
    return (
      <div>
      <NabBar />
      <div className="App">
        <header className="App-header">
          <img src={fish} className="App-logo" alt="logo" />
          <p>
            This is a work in progress...
          </p>
          <Spinner animation="border"></Spinner>
        </header>
      </div>
    </div>
    );
  }
}
