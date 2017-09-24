import React, { Component } from 'react';
import gpio from 'gpio';

// Flashing lights if LED connected to GPIO22 
var gpio22 = gpio.export(22, {
  ready: function() {
     intervalTimer = setInterval(function() {
        gpio22.set();
        setTimeout(function() { gpio22.reset(); }, 500);
     }, 1000);
  }
});

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
