import React from 'react';

const NumberList = ({ numbers }) => {
	return (
		<ul>
			{numbers.map(num => <li>{num}</li>)}
		</ul>
	)
}

export default NumberList;