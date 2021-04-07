import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: props.location,
			offset: props.offset,
			currentTime: new Date(),
		}
	}
	

	componentDidMount() {
		setInterval(() => {
			this.setState({
				currentTime: new Date(),
			})
		}, 1000)
	}

	render() {
		const locationHours = moment(this.state.currentTime).format('h') + this.state.offset;
		const minAndSec = moment(this.state.currentTime).format('mm:ss A');

		return (
			<div className="clock">
				<div className="clock__location">
						{this.state.location}
				</div>
				<div className="clock__time">
						{locationHours}:{minAndSec}
				</div>
			</div>
		)
	}
}

export default Clock;