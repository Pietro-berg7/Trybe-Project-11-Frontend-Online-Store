import React, { Component } from 'react';
import CartItem from '../components/CartItem';

export default class ShoppingCart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.setState({
      products: JSON.parse(localStorage.getItem('productCart')),
    });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        {!products ? (
          <div>
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio.
            </p>
            <img src="#" alt="#" />
          </div>
        ) : (
          products.map((item, i) => (
            <div key={ i }>
              <CartItem obj={ item } />
            </div>
          ))
        )}
      </section>
    );
  }
}
