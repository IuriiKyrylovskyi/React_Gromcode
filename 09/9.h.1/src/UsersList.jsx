import React, { Component } from 'react';
import User from './User';

class UsersList extends Component{
  state = {
    value: '',
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
            value="a"
            onChange={this.state.value.toLowerCase()}
          />
        </div>
        <ul className="users">
          {this.props.users.map(user => <User {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;