import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			isOnline: true
		}

		// setStatus = () => {
		// 	this.setState({
		// 		isOnline: false
		// 	})
		// }
	}

	render() {
		if (!this.state.isOnline) {
			return (
				<Offline />
			)
		}
		return (
			<Online />
		)
	}
}

export default Status;