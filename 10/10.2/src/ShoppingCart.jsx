import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component{
  state = {
    cartItems: [
      {
        id: 1,
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: 2,
        name: 'iPhone 11',
        price: 999,
      }
    ],
  }
  render() {
    const { cartItems } = this.state;

    const count = cartItems.length;

    return (
      <div className="column">
        <CartTitle count={count} userName={ this.props.userName }/>
        <ProductsList cartItems={ cartItems }/>
      </div>
    )
  }
}

export default ShoppingCart;