import React, { Component } from 'react';
import gpio from 'rpi-gpio';

gpio.setup(7, gpio.DIR_OUT);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Teste</h1>
      </div>
    );
  }
}

export default App;
