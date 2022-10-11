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

  handleDelete = ({ target: { id } }) => {
    const { products } = this.state;
    this.setState({
      products: products.filter((product) => id !== product.title),
    });
  };

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
              <button
                data-testid="remove-product"
                type="button"
                id={ item.title }
                onClick={ this.handleDelete }
              >
                Excluir
              </button>
            </div>
          ))
        )}
      </section>
    );
  }
}
