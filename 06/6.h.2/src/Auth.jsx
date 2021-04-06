import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			isLoggedin: false,
			spinnerSize: '50px',
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

	render() {
		return (
			<>
				<Login onLogin={this.handleLogin} />
				<Spinner size={this.state.spinnerSize}/>
				<Logout onLogout={this.handleLogout} />
			</>
		)
	}
}

export default Auth;