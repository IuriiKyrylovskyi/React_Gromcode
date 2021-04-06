import React from 'react';

const Spinner = ({ size }) => {
	const spinnerStyle = {
		width: { size },
		height: { size },
	}

	return (
		<span
			className="spinner"
			style={spinnerStyle}
		>
		</span>
	)
}

export default Spinner;