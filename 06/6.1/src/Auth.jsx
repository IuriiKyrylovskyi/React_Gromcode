import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
	constructor(props) {
		super(props);
			
		this.state = {
			isLoggedIn: true,
		}
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
					? <Logout onClick={this.handleLogOut} />
					: <Login onClick={this.handleLogIn} />
				}
			</div>
		)
	}
}

export default Auth;