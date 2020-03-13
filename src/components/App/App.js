import React, { Component } from 'react';
import Lovelace from '../Lovelace/Lovelace';
import { ParallaxProvider } from 'react-scroll-parallax'

export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Lovelace />
      </ParallaxProvider>
    );
  }
}
