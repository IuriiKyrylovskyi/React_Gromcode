import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		}
	}

	handleChange = e => {
		this.setState({
			value: e.target.value
		});
	}
	
	search = event => {
		event.preventDefault();
		alert(`Search text: ${this.state.value}`);
	}
	
	render() {
		return (
			<form className="search"
				onSubmit={this.search}
			>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
					className="search__input"
				/>
				<button
					className="search__button"
					type="submit"
				>
					Search
				</button>
			</form>
		)
	}
}

export default Search;