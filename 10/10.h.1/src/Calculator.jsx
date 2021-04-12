import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component{
  state = {
      temperature: '',
  }

  handleChange = e => {
    this.setState({
      temperature: e.target.value,
    })
  }

  render() {
    const temperature = this.state.temperature;
    
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    )
  }
}

export default Calculator;