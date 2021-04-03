import React from 'react';

class Toggler extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			text: 'Off'
		}
	}

	changeStatusBtn = () => {
		this.setState({
			text: 'On'
		})
	}

	render() {
		return (
			<button
				className="toggler"
				onClick={this.changeStatusBtn}
			>
				{this.state.text}
			</button>
		);
 }
}

export default Toggler;