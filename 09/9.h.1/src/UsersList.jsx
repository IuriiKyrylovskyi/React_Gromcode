import React from 'react';
import User from './User';
import Filter from './Filter';

const UsersList = ({users}) => {
  return (
     <div>
      <Filter filterText={ } count={ } onChange={ } />
      <ul className="users">
        {users.map(user => <User key={user.id} {...user} />)}
      </ul>
    </div>
  )
}

export default UsersList;