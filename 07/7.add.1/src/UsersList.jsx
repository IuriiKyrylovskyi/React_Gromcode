import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
	state = {
		users,
		goPrev,
		goNext,
		currentPage: 1,
		totalItems: users.length,
		itemsPerPage: 3,
	}

	render() {

		return (
			<div>
				<Pagination {...this.state}/>
			
				<ul className="users">
					{this.state.users.map(user => <User key={user.id} {...user} />)}
				</ul>
			</div>
		);
	}
}

export default UsersList;