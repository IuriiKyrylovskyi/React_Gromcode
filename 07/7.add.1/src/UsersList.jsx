import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			users: users,
			currentPage: 1,
			itemsPerPage: 3,
		}
	}

	goPrev = () => {
		this.setState({
			currentPage: currentPage - 1,
		})
	}

	goNext = () => {
		this.setState({
			currentPage: currentPage + 1,
		})
	}

	totalItems = () => {
		this.setState({
			totalItems: this.users.length,
		})
	}

	render() {
		return (
			<div>
				<Pagination
					// {...this.state}
					currentPage={this.state.currentPage}
					itemsPerPage={this.state.itemsPerPage}
					goPrev={this.goPrev}
					goNext={this.goNext}
					totalItems={this.totalItems}
				/>
			
				<ul className="users">
					{
						this.state.users
							.map(user => <User key={user.id} {...user} />)
					}
				</ul>
			</div>
		);
	}
}

export default UsersList;