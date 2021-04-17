import React, { Component } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends Component {
  state = {
    userId: '',
    userData: {
      name: null,
      avatar_url: null,
      location: null,
    },
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate = prevProps => {
    const newParam = this.props.match.params.userId;
    const prevParam = prevProps.match.params.userId;

    if (newParam !== prevParam) {
      this.fetchUser()
    }
  }

  fetchUser = () => {
    fetch(`${baseUrl}/${this.props.match.params.userId}`)
      .then(response => {
        if (response.ok) {
        return response.json()
        }
        throw new Error('Failed to load data')
      })
      .then(userData => this.setState({
        userData,
        userId: this.props.match.params.userId,
      }))
  }

  render(){
    if (this.state.userData !== null) {
      const { avatar_url, name, location } = this.state.userData;

      return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">
            {name}
          </span>
          <span className="user__location">
            {location}
          </span>
        </div>
      </div>
      )}
    }
  }

export default User;