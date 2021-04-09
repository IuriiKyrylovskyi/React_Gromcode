import React, { Component } from 'react';

class Filter extends Component{
//  state = {
//    value: this.props.filterText,
//    count: this.props.count,

//   }

//   handleChange = e => {
//     console.log(e.target.value);
//     this.setState({
//       value: e.target.value,
//     })

//   }
  
//   onChange = () => {
//     this.props.onChange(this.state.value)
//   }

  render() {
    return (
      <div className="filter">
        <span className="filter__count">
          {this.props.count}
        </span>
        <input
          type="text"
          className="filter__input"
          value={this.props.filterText} 
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default Filter;