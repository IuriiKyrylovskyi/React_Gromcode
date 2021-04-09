import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    users: this.props.users,
    count: this.props.users.length,
    text: '',
  }

  handleFilterOnChange = e => {
    const filteredUsers = this.state.users
      .filter(user =>
        user.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase()))

    this.setState({
      users: filteredUsers ,
      count: filteredUsers.length,
      text: e.target.value,
    })
  }

  render() {
    return (
       <div>
        <Filter
          filterText={this.state.text}
          count={this.state.count}
          onChange={this.handleFilterOnChange}
        />
        <ul className="users">
          {this.state.users.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;