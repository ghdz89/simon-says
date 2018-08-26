import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  constructor(props){
    super(props);
    this.pulseEnd = this.pulseEnd.bind(this);
    this.state = {
      pulse: false
    };
  }

  componentDidMount() {
    this.div.addEventListener('animationend', this.pulseEnd);
  }

  componentWillUnmount () {
    this.div.removeEventListener('animationend', this.pulseEnd);
  }

  pulseEnd() {
    this.setState({pulse: false});
  }

  render() {
    const pulse = this.state.pulse;

    return (
      <div 
        ref={div => this.div = div}
        style={{background: this.props.color}}
        onClick={() => this.setState({pulse: true})}
        className={pulse ? 'Square-pulse' : 'Square'}>
      </div>
    );
  }
}

export default Square;