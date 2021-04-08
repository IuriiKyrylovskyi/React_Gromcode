import React, { Component } from 'react';

class ConnectionStatus extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: window.navigator.onLine,
		}
	}
	

	componentDidMount() {
		window.addEventListener('online', this.getStatus);
		window.addEventListener('offline', this.getStatus);
	}
 
	componentWillUnmount() {
		window.removeEventListener('online', this.getStatus);
		window.removeEventListener('offline', this.getStatus);
	}

	getStatus = e => {
		this.setState({
			status: window.navigator.onLine,
		})
	}

	render() {
		if (this.state.status) {
			return (
				<div className="status">
					Online
				</div>
			)
		}
		return (
				<div className="status status_offline">
					Offline
				</div>
		)
	}
}

export default ConnectionStatus;