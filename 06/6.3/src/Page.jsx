import React from 'react';
import Message from './Message';

class Page extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			text: null
		}
	}

	render() {
		return (
			<div className="page">
				<Message text={this.state.text} />
				<div className="actions">
					<button className="btn">
						Text 1
					</button>
					<button className="btn">
						Text 2
					</button>
					<button className="btn">
						Clear
					</button>
				</div>		
			</div>
		)
	}
}

export default Page;