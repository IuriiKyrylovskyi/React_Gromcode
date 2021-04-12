import React from 'react';
import User from './User';

const UserProfile = ({userData}) => {
  if (!userData) {
    return null;
  }
  return (
    <User userData={userData} />
  )
}

export default UserProfile;