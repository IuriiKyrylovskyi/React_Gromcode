import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component{
  state = {
    userName: this.props.userName,
    products,
  }
  render() {
    return (
      <div className="column">
        <CartTitle count={count} userName={ this.state.userName }/>
        <ProductsList cartItems={ this.state.products }/>
      </div>
    )
  }
}

export default ShoppingCart;