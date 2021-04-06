import React from 'react';

const Logout = ({ onLogout }) => {
	if (!onLogout) {
		return null;
	}
	return (
		<button
			className="logout btn"
			onClick={onLogout}
		>
			Logout
		</button>
	)
}

export default Logout;