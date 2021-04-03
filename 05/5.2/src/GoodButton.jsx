import React from 'react';

class Button extends React.Component{
	handleClick(e) {
		e.preventDefault();
		alert('Good job!');
	}

	render() {
		return (
			<button
				className="fancy-button"
				onClick={handleClick}
			>
				Click me!
			</button>
		);
 }
}

export default Button;