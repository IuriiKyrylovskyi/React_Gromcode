import React from 'react';

class Counter extends React.Component{
	constructor(props) {
		super(props);
			
		this.state = {
			counter: 0,
		}
	}

	increment = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	decrement = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	}

	reset = () => {
		this.setState({
			counter: 0,
		})
	}

	render() {
		return (
			<div class="counter">
				<button
					data-action="decrease"
					class="counter__button">
					-
				</button>
				<span class="counter__value">
					{this.state.counter}
				</span>
				<button
					data-action="increase"
					class="counter__button">
					+
				</button>
			</div>
		);
 }
}

export default Counter;