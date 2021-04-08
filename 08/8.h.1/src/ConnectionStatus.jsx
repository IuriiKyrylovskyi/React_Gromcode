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
			status: e.target.navigator.onLine,
		})
	}

	ifElseMethod = (yes, no) => {
		return this.state.status ? yes : no;
	}

	render() {
		return (
			<div className={this.ifElseMethod("status", "status status_offline")}>
				{this.ifElseMethod('online', 'offline')}
			</div>
		)
	}
	// render() {
	// 	return (
	// 		<div
	// 			className={
	// 				this.state.status
	// 					? "status"
	// 					: "status status_offline"
	// 			}
	// 		>
	// 			{this.state.status
	// 				? 'online'
	// 				: 'offline'}
	// 		</div>
	// 	)
	// }
}

export default ConnectionStatus;