import React from 'react';

const NumberList = ({ numbers }) => {
	return (
		<ul>
			{numbers.map(num => <li>Login {num}</li>)}
		</ul>
	)
}

export default NumberList;