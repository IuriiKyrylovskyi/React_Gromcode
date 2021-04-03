import React from 'react';

const Button = () => {
	return (
		<button
			className="fancy-button"
			onClick={() => alert('Good job!')}
		>
			Click me!
		</button>
	)
}


export default Button;