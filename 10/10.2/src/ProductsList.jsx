import React from 'react';

const ProductsList = (cartItems) => {
  const [id, name, price] = cartItems;

  return (
    <div className="products">
      <ul className="products__list">
        <li className="products__list-item">
          <span className="products__item-name">{name}</span>
          <span className="products__item-price">{`$${price}`}</span>
        </li>
        <li className="products__list-item">
          <span className="products__item-name">{name}</span>
          <span className="products__item-price">{`$${price}`}</span>
        </li>
      </ul>
      <div className="products__total">Total: $1798</div>
    </div>
  )
}

export default ProductsList;