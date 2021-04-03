import React from 'react';

const RED = '#f00';
const BLUE = '#00f';
const GREEN = '#0f0';

class Colors extends React.Component{
	changeBgColor = color => {
		document.body.style.backgroundColor = color;
	}
	
	render() {
		return (
			<div className='colors'>
				<button
					className="colors__button"
					style={{
						backgroundColor: RED,
					}}
					onClick={() => this.changeBgColor(RED)}>
					</button>
				<button
					className="colors__button"
						style={{
						backgroundColor: BLUE,
					}}
					onClick={() => this.changeBgColor(BLUE)}>
				</button>
				<button
					className="colors__button"
					style={{
						backgroundColor: GREEN,
					}}
					onClick={() => this.changeBgColor(GREEN)}></button>
			</div>
		);
 }
}

export default Colors;