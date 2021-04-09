import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    users: this.props.users,
    value: '',
  }

  filteredUsers = () => {
    const text = this.filterText;

    const filtered = this.state.users
      .filter(user =>
        user.name
          .toLowerCase()
          .contains(text.toLowerCase()))
    
    this.setState({
      users: filtered,
    })
  }

  // amountFilteredUsers = () => {
  //   this.filteredUsers.filtered.length()
  // }

  filterText = text => {
    this.setState({
      text: text
    });
  }

  count = () => {
    this.state.users.length();
  }

  render() {
    return (
       <div>
        <Filter
          filterText={this.filtertext}
          count={this.count}
          onChange={'func'}
        />
        <ul className="users">
          {this.state.users.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;