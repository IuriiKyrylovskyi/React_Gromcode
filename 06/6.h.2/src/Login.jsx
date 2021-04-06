import React from 'react';

const Login = ({ onLogin }) => {
	if (!onLogin) {
		return null;
	}
	return (
		<button class="login btn">Login</button>
	)
}

export default Login;