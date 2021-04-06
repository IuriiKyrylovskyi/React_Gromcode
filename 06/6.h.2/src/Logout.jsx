import React from 'react';

const Logout = ({ onLogout }) => {
	if (!onLogout) {
		return null;
	}
	return (
		<button class="logout btn">Logout</button>
	)
}

export default Logout;