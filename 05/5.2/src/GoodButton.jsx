import React from 'react';

class Button extends React.Component{
	handleClick(e) {
		alert('Good job!');
	}

	render() {
		return (
			<button
				className="fancy-button"
				onClick={this.handleClick}
			>
				Click me!
			</button>
		);
 }
}

export default Button;