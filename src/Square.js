import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  render() {
    return (
      <div className="Square" style={{background: this.props.color}}>
      </div>
    );
  }
}

export default Square;