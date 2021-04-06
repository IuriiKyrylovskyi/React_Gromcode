import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
	return (
		<ul className='users'>
			{users.map(user => <User name={user.name} age={user.age} />)}
		</ul>
	)
}

export default UsersList;
