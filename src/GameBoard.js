import React, { Component } from 'react';
import Square from './Square.js';
import './Square.css';
import './GameBoard.css';
// import PropTypes from 'prop-types';


class GameBoard extends Component {

  render() {
    const colors = {
      green: '#7adaa2',
      blue: '#e44949',
      yellow: '#f0ef52',
      red: '#40b5d3'
    }
    
    return (
      <div className="GameBoard">
        <Square color='#7adaa2'/>
        <Square color='#e44949'/>
        <Square color='#f0ef52'/>
        <Square color='#40b5d3'/>
      </div>
    )
  }
}

export default GameBoard;