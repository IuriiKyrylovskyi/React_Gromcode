import React from 'react';

const Logout = ({ click }) => {
	return (
		<button
			className='logout btn'
			onClick={click}
		>
			Logout
		</button>
	)
}

export default Logout;