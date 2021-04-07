import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			users: props.users,
			currentPage: 1,
			itemsPerPage: 3,
			totalItems: props.users.length,
		}
	}
	
	goPrev = () => {
		this.setState({
			currentPage: this.state.currentPage > 1
										? this.state.currentPage - 1
										: 1,
		})
	}

	goNext = () => {
		this.setState({
			currentPage: this.state.currentPage + 1,
		})
	}

	render() {
		const indexMin = (this.state.currentPage - 1) * this.state.itemsPerPage;
		const indexMax = indexMin + this.state.itemsPerPage;

		return (
			<div>
				<Pagination
					{...this.state}
					goPrev={this.goPrev}
					goNext={this.goNext}
				/>
			
				<ul className="users">
					{
						this.props.users
							.filter((user, index) => index >= indexMin && index < indexMax)
							// .splice(
							// 	(this.state.currentPage - 1) * this.state.itemsPerPage,
							// 	this.state.itemsPerPage
							// )
							.map(user => <User key={user.id} {...user} />)
					}
				</ul>
			</div>
		);
	}
}

export default UsersList;