import React, { Component } from 'react';

class Search extends Component {
	state = {
		value: '',
	}

	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	}

	handleClick = e => {
		alert(`Search text: ${this.state.value}`);
		// this.setState({
		// 	value: '',
		// });
		e.preventDefault();
	}

	render() {
		return (
			<form className="search" >
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
					className="search__input"
				/>
				<button
					className="search__button"
					onClick={this.handleClick}
				>
					Search
				</button>
			</form>
		)
	}
}

export default Search;