import React from 'react';

class Toggler extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			isToggleOff: true
		};
	}

	handleClick = () => {
		this.setState({
			isToggleOff: !this.state.isToggleOff
		});
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