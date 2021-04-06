import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
	return (
		<div>
			<button onClick={sorting} className='btn'>-</button>
			<ul className='users'>
				{users.map(user => <User name={user.name} age={user.age} />)}
			</ul>
		</div>
	)
}

export default UsersList;
