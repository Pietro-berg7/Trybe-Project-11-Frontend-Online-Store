import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  state = {
    quantity: 1,
  };

  render() {
    const { obj } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{`Produto ${obj.title}`}</p>
        <img src={ obj.thumbnail } alt={ obj.title } />
        <p>{`R$ ${obj.price}`}</p>
        <div>
          <button type="button">+</button>
          <p data-testid="shopping-cart-product-quantity">{`${quantity}`}</p>
          <button type="button">-</button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  obj: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
