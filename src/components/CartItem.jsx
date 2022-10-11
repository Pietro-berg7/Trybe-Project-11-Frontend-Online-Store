import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  state = {
    quantity: 1,
  };

  increaseButton = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decreaseButton = () => {
    const { quantity } = this.state;
    if (quantity >= 2) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
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
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increaseButton }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{`${quantity}`}</p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decreaseButton }
          >
            -
          </button>
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
