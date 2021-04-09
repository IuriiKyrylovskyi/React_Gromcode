import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    users: props.users,
  }

  users = () => {
    users
  }

  render() {
    return (
       <div>
        <Filter filterText={ text} count={num } onChange={this.users} />
        <ul className="users">
          {users.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;