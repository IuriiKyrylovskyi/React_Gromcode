import React, { Component } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends Component {
  state = {
    userId: this.props.match.params.userId,
    userData: {
      name: null,
      avatar_url: null,
      location: null,
    },
  }

  componentDidMount() {
   this.handleUserIdChange(this.state.userId);
   this.fetchUser(this.state.userId);
  }

  handleUserIdChange = userId => {
    if (userId !== this.props.match.params.userId) {
      return setState({ userId: this.props.match.params.userId });
    }
  }

  fetchUser = userId => {
    fetch(`${baseUrl}/${userId}`)
      .then(response => {
        if (response.ok) {
        return response.json()
        }
        throw new Error('Failed to load data')
      })
      .then(userData => this.setState({
        userData
      }))
  }

  render(){
    if (this.state.userData !== null) {
      // console.log(this.props.match);
      // console.log(typeof this.props.match.params.userId);
      console.log(this.state.userData);
      
      const { avatar_url, name, location } = this.state.userData;

      return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        {/* <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" /> */}
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