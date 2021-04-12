import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component{
  state = {
    userName: this.props.userName,
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
    const { userName, cartItems } = this.state;
    
    const total = cartItems.reduce(
      (acc, item) => acc + item.price, 0
    )

    return (
      <div className="column">
        <CartTitle count={total} userName={ userName }/>
        <ProductsList cartItems={ cartItems }/>
      </div>
    )
  }
}

export default ShoppingCart;