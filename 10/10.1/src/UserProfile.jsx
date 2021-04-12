import React, { Component } from 'react';
import User from './User';

class UserProfile extends Component {
  render() {
    return (
      <User userData={this.props.userdata} />
    )
  }
}

export default UserProfile;