import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loading from '../components/Loading';

export default class Home extends Component {
  // state = {
  //   loading: true,
  //   productList: [],
  //   category:[],
  // };

  render() {
    return (
      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Clique aqui</Link>
      </main>
    );
  }
}
