import React from 'react';

const Login = ({ onLogin }) => {
	if (!onLogin) {
		return null;
	}
	return (
		<button
			className="login btn"
			onClick={onLogin}
		>
			Login
		</button>
	)
}

export default Login;