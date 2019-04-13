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

  addCount = event => {
    const { name } = event.target;
    let count = this.state[name] + 1;

    if((name === 'strike' && count === 3) || (name === 'ball' && count === 4) || name === 'hit') {
      this.setState({
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0
      })
    } else {
      this.setState({ [event.target.name]: this.state[event.target.name] + 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <Display count={this.state} />
        <Dashboard addCount={this.addCount} />
      </div>
    );
  }
}

export default App;
