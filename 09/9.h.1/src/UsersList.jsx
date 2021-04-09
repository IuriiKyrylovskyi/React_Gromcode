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
    const { users } = this.props
    
    if (e.target.value.trim() === "") {
      this.setState({
        users: users ,
        count: users.length,
        text: e.target.value,
      })

      return;
    }
    
    const filteredUsers = users
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
    const { text, count, users } = this.state;
    
    return (
       <div>
        <Filter
          filterText={text}
          count={count}
          onChange={this.handleFilterOnChange}
        />
        <ul className="users">
          {users.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    )
  }
}

export default UsersList;