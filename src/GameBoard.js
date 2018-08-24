import React, { Component } from 'react';
import Square from './Square.js';
import './GameBoard.css';

class GameBoard extends Component {
  render() {
    return (
      <div className="GameBoard">
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

export default GameBoard;