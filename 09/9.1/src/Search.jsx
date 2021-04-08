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

	searh = e => {
		// alert(`Search text: ${this.state.value}`);
		e.preventDefault();
	}

	handleClick = () => {
		alert(`Search text: ${this.state.value}`);
	}

	render() {
		return (
			<form className="search" onSubmit={this.search}>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
					className="search__input"
				/>
				<button
					className="search__button"
					type="submit"
					onClick={this.handleClick}
				>
					Search
				</button>
			</form>
		)
	}
}

export default Search;