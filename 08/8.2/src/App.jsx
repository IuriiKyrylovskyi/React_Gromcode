import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: true,
		};
	};

	toggle = () => {
		this.setState({
			isVisible: !this.state.isVisible,
		});
	};

	render() {
		return (
			<>
				<button onClick={this.toggle} className="btn">Toggle</button>
				{
					this.state.isVisible &&
					<div className="box">
						<Clock location="Irpin'" offset={3} />
						<Clock location="New York" offset={-7}/>
						<Clock location="Vienna" offset={2} />
					</div>
				}
			</>
		)
	}
}

export default App;