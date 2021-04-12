import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component{
  state = {
    user: this.props.user,
  }

  render() {
    return (
      <div className="page">
        <h1 className="title">Hello, John Doe</h1>
        <main className="content">
          <ShoppingCart userName={ this.props.user.name }/>
          <Profile userData={ this.props.user }/>
        </main>
      </div>
    )
  }
}

export default App;