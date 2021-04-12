import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component{
  state = {
    user: null,
  }

  componentDidMount() {
		this.fetchUser(this.props.userName);
	}

  fetchUser = userName => {
		fetch(`https://api.github.com/users/${userName}`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					user: data,
				})
		})
	}

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.user} />
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    )
  }
}

export default App;