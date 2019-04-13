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

  addStrike = () => {
    this.setState({ strike: this.state.strike + 1 });
  }

  render() {
    return (
      <div className="App">
        <Display count={this.state} />
        <Dashboard strike={this.addStrike} />
      </div>
    );
  }
}

export default App;
