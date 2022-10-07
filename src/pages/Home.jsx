import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loading from '../components/Loading';
import { getCategories } from '../services/api';
import Category from '../components/Category';

export default class Home extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = async () => {
    const result = await getCategories();
    this.setState({
      category: result,
    });
  };

  render() {
    const { category } = this.state;
    return (
      <main>
        {category.map(({ name, id }) => (
          <Category
            key={ id }
            name={ name }
            id={ id }
          />
        ))}
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Clique aqui</Link>
      </main>
    );
  }
}
