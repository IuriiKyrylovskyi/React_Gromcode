import React from 'react';
import User from './User';

const UsersList = ({users}) => {
  return (
    <ul className="users">
      {users.map(user => <User {...user} />)}
    </ul>
  )
}

export default UsersList;