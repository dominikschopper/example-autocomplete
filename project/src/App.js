import React, { Component } from 'react';

import Autoc from './containers/autoc/autoc';
import countriesArray from "./example-data/countries-array";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="eight columns bg-white" >
          <Autoc name="example 1" minLength="2" source={countriesArray} />
        </div>
      </div>
    );
  }
}

export default App;
