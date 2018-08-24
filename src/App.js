import React, { Component } from 'react';
import logo from './logo.svg';
import GameBoard from './GameBoard.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>SIMON SAYS</h1>
        </div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
