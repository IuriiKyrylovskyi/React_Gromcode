import React from 'react';
import Clock from './Clock'

const App = () => {
	return (
		<>
			<Clock location='Irpin' offset={2} /> 
			<Clock location='New York' offset={-4} /> 
			<Clock location='Tokio' offset={9} />
		</>
	)
}

export default App;