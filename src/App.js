import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //   <h1>Hi I am learning React JS</h1>
    //   </div>
    // );
    return React.createElement(
      'div',{className:'App'},React.createElement(
                              'h1',null, 'Hi I am learning React JS!!!'
                              )
      );
  }
}

export default App;
