import React from 'react';

const Login = ({ click }) => {
	return (
		<button
			className='login btn'
			onClick={click}
		>
			Login
		</button>
	)
}

export default Login;