import React, { Component } from 'react';
import './App.css';

import Autoc from './containers/autoc/autoc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="eight columns bg-white" >
          <Autoc name="example 1"></Autoc>
        </div>
      </div>
    );
  }
}

export default App;
