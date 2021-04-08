import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset, time) => {
    const utcOffset = time.getTimezoneOffset() / 60;
    return new Date(time.setHours(time.getHours() + offset + utcOffset));
}
class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date(),

		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				time: new Date(),
			});
		}, 1000);

	}
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="clock">
				<div className="clock__location">
						{this.props.location}
				</div>
				<div className="clock__time">
						{moment(getTimeWithOffset(this.props.offset, this.state.time)).format('h:mm:ss A')}
				</div>
			</div>
		)
	}
}

export default Clock;