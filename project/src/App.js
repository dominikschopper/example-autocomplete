import React, { Component } from 'react';

import Autoc from './containers/autoc/autoc';

// example source data
import countriesArray from "./example-data/countries-array";
import programmingLanguages from './example-data/languages-array';
import firstnames from './example-data/firstnames';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="six columns bg-white" >
          <Autoc name="country autocomplete" inputLabel="Countries:" minLength="2" source={countriesArray} />
        </div>

        <div className="six columns bg-white" >
          <Autoc name="search for a programming language" inputLabel="Programming Languages" minLength="1" source={programmingLanguages} />
        </div>

        <div className="six columns bg-white" >
          <Autoc name="german baby names" inputLabel="Name Search" minLength="3" source={firstnames} />
        </div>
      </div>
    );
  }
}

export default App;
