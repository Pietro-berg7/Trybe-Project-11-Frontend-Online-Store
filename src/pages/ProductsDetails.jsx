import { shape, string } from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class ProductsDetails extends Component {
  state = {
    detail: null,
    cartItems: [],
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductById(id).then((data) => this.setState({
      detail: data,
    }));
  }

  handleAddCart = () => {
    const { detail } = this.state;
    const { price, title, thumbnail } = detail;
    this.setState(({
      cartItems: [{ price, title, thumbnail }],
    }), () => {
      const { cartItems } = this.state;
      localStorage.setItem('productCart', JSON.stringify(cartItems));
    });
  };

  render() {
    const { detail } = this.state;
    return (
      <div>
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <h2>detalhes do produtos</h2>
        {detail
          ? (
            <div>
              <p
                data-testid="product-detail-name"
              >
                {detail.title}
              </p>
              <img
                data-testid="product-detail-image"
                src={ detail.thumbnail }
                alt={ detail.title }
              />
              <p data-testid="product-detail-price">
                {detail.price}
              </p>
              <p>
                {detail.title}
              </p>
              <a
                data-testid="product-detail-link"
                href={ detail.permalink }
              >
                link
              </a>
              <button
                type="submit"
                data-testid="product-detail-add-to-cart"
                onClick={ this.handleAddCart }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ) : <> </>}
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  match: shape,
  params: shape,
  id: string,
}.isRequired;
