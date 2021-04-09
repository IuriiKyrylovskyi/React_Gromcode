import React, { Component } from 'react';
import UsersList from './UsersList';

class Filter extends Component{
 state = {
   value: '',
   count: '',
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div className="filter">
          <span className="filter__count">
            5
          </span>
          <input
            type="text"
            className="filter__input"
            value={this.state.value} //.toLowerCase()}
            onChange={this.handleChange}
          />
        </div>
        <UsersList users={this.state.value} />
      </div>
    )
  }
}

export default Filter;