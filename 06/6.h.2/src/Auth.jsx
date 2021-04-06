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
			activeSpinner: true,
		}
		console.log(this.state)
	}

	handleLogin = () => {
		this.setState({
			isLoggedin: true,
		})
	}

	handleLogout = () => {
		this.setState({
			isLoggedin: false,
		})
	}

	timeOut = (spinner, btn) => {
		spinner;
		setTimeout(() => {
			btn
		}, 2000)
	}

	render() {
		return (
			<>
				{/* <div><pre>{JSON.stringify(this.state)}</pre></div> */}
				{
					!this.state.isLoggedin
						? <Login onLogin={this.handleLogin} />
						// <Login onLogin={this.handleLogin} />
						: this.timeOut(
							<Spinner size={this.state.spinnerSize} />,
							<Logout onLogout={this.handleLogout} />
							)
				}
				
			</>
		)
	}
}

export default Auth;