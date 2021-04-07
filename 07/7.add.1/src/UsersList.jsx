import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			users: props.users,
			currentPage: 3,
			itemsPerPage: 3,
			totalItems: props.users.length,
		}
	}

	goPrev = () => {
		this.setState({
			currentPage: this.state.currentPage - 1,
		})
	}

	goNext = () => {
		this.setState({
			currentPage: this.state.currentPage + 1,
		})
	}

	// totalItems = () => {
	// 	this.setState({
	// 		totalItems: this.users.length,
	// 	})
	// }

	render() {
		return (
			<div>
				<Pagination
					{...this.state}
					// currentPage={this.state.currentPage}
					// itemsPerPage={this.state.itemsPerPage}
					// totalItems={this.state.totalItems}
					goPrev={this.goPrev}
					goNext={this.goNext}
				/>
			
				<ul className="users">
					{
						this.state.users
							.splice(
								(this.state.currentPage - 1) * this.state.itemsPerPage,
								this.state.itemsPerPage
							)
							.map(user => <User key={user.id} {...user} />)
					}
				</ul>
			</div>
		);
	}
}

export default UsersList;