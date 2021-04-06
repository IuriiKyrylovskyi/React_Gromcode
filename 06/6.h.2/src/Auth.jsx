import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			isLoggedin: false,
			spinnerSize: 50,
			isSpinnerVisible: false,
		}
		console.log(this.state)
	}

	handleLogin = () => {
		this.setState({
			isSpinnerVisible: true
		}),
			
		setTimeout(() => {
			this.setState({
				isSpinnerVisible: false,
				isLoggedin: true,
			})
		}, 2000)
	}

	handleLogout = () => {
		this.setState({
			isLoggedin: false,
		})
	}

	render() {
		return (
			<>
				{
					this.state.isSpinnerVisible
						? <Spinner size={this.state.spinnerSize} />
						: !this.state.isLoggedin
							? <Login onLogin={this.handleLogin} />
							: <Logout onLogout={this.handleLogout} />
				}
			</>
		)
	}
}

export default Auth;
{/* {
	!this.state.isLoggedin
		? <Login onLogin={this.handleLogin} />
		: this.state.isSpinnerVisible
			? <Spinner
					size={this.state.spinnerSize}
				/>
			: <Logout onLogout={this.handleLogout} />
} */}