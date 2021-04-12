import React from 'react';
import User from './User';

const UserProfile = props => {
  if (!props.userData) {
    return null;
  }
  return (
    <User userData={props.userData} />
  )
}

export default UserProfile;