import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
	constructor(props) {
		super(props);
			
		this.state = {
			isLoggedIn: false,
		}
		console.log(this.state)
	}

	handleLogIn = () => {
		this.setState({
			isLoggedIn: true,
		})
	}
	
	handleLogOut = () => {
		this.setState({
			isLoggedIn: false,
		})
	}

	render() {
		return (
			<div className='panel'>
				<Greeting isLoggedIn={this.state.isLoggedIn} />
				{
					this.state.isLoggedIn
					? <Logout click={this.handleLogOut} />
					: <Login click={this.handleLogIn} />
				}
			</div>
		)
	}
}

export default Auth;