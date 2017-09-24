import React, { Component } from 'react';
import gpio from 'gpio';

var gpio22 = gpio.export(22, {direction: "out"});

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
