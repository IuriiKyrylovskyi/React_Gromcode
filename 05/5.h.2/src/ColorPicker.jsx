import React from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			color: null
		};
	}

	handleHover = colorName => {
		this.setState({
			color: colorName
		});
	}

	render() {
		return (
			<div>
				<div className="picker__title">
					{this.state.color}
				</div>
				<div>
					<button
						className="picker__button picker__button_coral"
						onMouseOver={() => this.handleHover(CORAL)}
						onMouseLeave={() => this.handleHover(null)}
					></button>
					<button
						className="picker__button picker__button_aqua"
						onMouseOver={() => this.handleHover(AQUA)}
						onMouseLeave={() => this.handleHover(null)}
					></button>
					<button
						className="picker__button picker__button_bisque"
						onMouseOver={() => this.handleHover(BISQUE)}
						onMouseLeave={() => this.handleHover(null)}
					></button>
				</div>
			</div>
		);
 }
}

export default ColorPicker;