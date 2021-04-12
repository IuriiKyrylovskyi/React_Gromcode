import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component{
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  }

  render() {
    const { firstName, lastName } = this.state.userData;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
        <main className="content">
          <ShoppingCart userName={ firstName } />
          <Profile userData={ firstName, lastName } />
        </main>
      </div>
    )
  }
}

export default App;