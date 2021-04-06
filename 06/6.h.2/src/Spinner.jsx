import React from 'react';

const Spinner = ({ size }) => {
	const spinnerStyle = {
		width: { size },
		height: { size },
		borderRaduis: '50%',
	}

	return (
		<span
			class="spinner"
			style={spinnerStyle}
		>
		</span>
	)
}

export default Spinner;