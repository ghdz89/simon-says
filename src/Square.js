import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false
    };
  }

  handleClick(){
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }


  render() {
    return (
      <div className={this.state.active ? 'Squarepulse': 'Square'} style={{background: this.props.color}} onClick={this.handleClick}>
      </div>
    );
  }
}

export default Square;