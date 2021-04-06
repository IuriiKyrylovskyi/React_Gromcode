import React from 'react';

const NumbersList = ({ numbers }) => {
	return (
		<ul>
			{numbers.map(num => <li>Login {num}</li>)}
		</ul>
	)
}

export default NumbersList;