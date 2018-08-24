import React, { Component } from 'react';
import Square from './Square.js';
import './Square.css';
import './GameBoard.css';

class GameBoard extends Component {
  render() {

    colors = {
      green: '#7adaa2',
      blue: 'blue',
      yellow: 'yellow',
      red: 'red'
    };

    return (
      <div className="GameBoard">
        <Square color={this.colors.green}/>
        <Square color={this.colors.green}/>
        <Square color={this.colors.green}/>
        <Square color={this.colors.green}/>
      </div>
    )
  }
}

export default GameBoard;