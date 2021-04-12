import React from 'react';

const UserForm = ({ userData }) => {

  const { firstName, lastName } = userData;
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      }
    })
  }

  return (
     <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={this.handleChange}
      />
    </form>
  )
}

export default UserForm;