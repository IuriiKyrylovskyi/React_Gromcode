import React, { Component } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends Component {
  state = {
    userData: null,
  }

  componentDidMount() {
    fetchUser(this.props.match.params.userId);
  }

  fetchUser = userId => {
    fetch(`${baseUrl}/${userId}`)
      .then(response => {
        if (response.ok) {
        return response.json()
        }
        throw new Error('Failed to load data')
      })
      .then(userData => this.setState({userData}))
  }

  render(){
    console.log(this.props.match);
    console.log(typeof this.props.match.params.userId);
    console.log(this.state.userData);

    const { avatar_url, name, location } = this.state.userData;

    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar"/>
        <div className="user__info">
          <span className="user__name">
            GitHub {name}
            </span>
          <span className="user__location">
            San Francisco,CA {location}
            </span>
        </div>
      </div>
    )
  }
}

export default User;