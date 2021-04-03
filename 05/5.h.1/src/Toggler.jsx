import React from 'react';

class Toggler extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			isToggleOff: true
		};
	}

	handleClick = () => {
		this.setState(state => ({
			isToggleOff: !state.isToggleOff
		}));
	}

	render() {
		return (
			<button
				className="toggler"
				onClick={this.handleClick}
			>
				{this.state.isToggleOff ? 'Off' : 'On'}
			</button>
		);
 }
}

export default Toggler;