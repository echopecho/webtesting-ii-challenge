import React, { Component } from 'react';

import Display from './Display/Display';
import Dashboard from './Dashboard/Dashboard';

import './App.css';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }

  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
