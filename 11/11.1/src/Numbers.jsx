import React, { Component } from 'react';

class Numbers extends Component{
  render() {
    return (
      <div className="number">
        <span className="number__title">
          {this.props.title}  
        </span>
        <span className="number__value">
          {this.props.number}  
        </span>
      </div>
    )
  }
}

export default Numbers;