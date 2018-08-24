import React, { Component } from 'react';
import Square from './Square.js';
import './Square.css';
import './GameBoard.css';
// import PropTypes from 'prop-types';


class GameBoard extends Component {

  render() {

    const colors = {
      green: '#7adaa2',
      red: '#e44949',
      yellow: '#f0ef52',
      blue: '#40b5d3'
    };

    return (
      <div className="GameBoard">
        <Square color={colors.green}/>
        <Square color={colors.red}/>
        <Square color={colors.yellow}/>
        <Square color={colors.blue}/>
      </div>
    )
  }
}

export default GameBoard;