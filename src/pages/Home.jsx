import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Loading from '../components/Loading';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Category from '../components/Category';

export default class Home extends Component {
  state = {
    listProduct: [],
    category: [],
    product: false,
    search: '',
    cartItems: [],
  };

  componentDidMount() {
    this.fetchCategoryButton();
  }

  fetchCategoryButton = async () => {
    const result = await getCategories();
    this.setState({
      category: result,
    });
  };

  fetchCategory = async ({ target: { value } }) => {
    const { results } = await getProductsFromCategoryAndQuery(value);
    // console.log(value);
    this.setState({
      listProduct: results,
    });
  };

  handleAddCart = ({ target: { id } }) => {
    console.log(id);
    const { listProduct } = this.state;
    const addItems = listProduct.find((item) => item.id === id);
    const { price, title, thumbnail } = addItems;
    this.setState((previousState) => ({
      cartItems: [...previousState.cartItems, { price, title, thumbnail }],
    }), () => {
      const { cartItems } = this.state;
      localStorage.setItem('productCart', JSON.stringify(cartItems));
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };

  handleClickButton = () => {
    const { search } = this.state;
    if (search.trim() === '') {
      this.setState({
        listProduct: [],
        product: false,
      });
      return;
    }
    getProductsFromCategoryAndQuery(null, search)
      .then(({ results }) => {
        this.setState({
          listProduct: results,
          product: true,
        });
      });
  };

  render() {
    const { category, listProduct, product } = this.state;
    return (
      <main>
        <aside>
          {category.map(({ name, id }) => (
            <Category
              key={ id }
              name={ name }
              id={ id }
              fetchCategory={ this.fetchCategory }
            />
          ))}
        </aside>
        <setion>
          <label htmlFor="search">
            <input
              name="search"
              id="search"
              type="text"
              data-testid="query-input"
              onChange={ this.handleChange }
              placeholder="Pesquisa"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClickButton }
            data-testid="query-button"
          >
            Buscar
          </button>
        </setion>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">Clique aqui</Link>
        {listProduct.length === 0 && !product
          ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
          : (
            <ul>
              {listProduct.map(({ id, title, price, thumbnail }) => (
                <li
                  key={ id }
                  data-testid="product"
                >
                  <Link
                    to={ `/productdetails/${id}` }
                    data-testid="product-detail-link"
                  >
                    Detalhes do produto
                  </Link>
                  <p>{title}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>{price}</p>
                  <button
                    type="submit"
                    data-testid="product-add-to-cart"
                    onClick={ this.handleAddCart }
                    id={ id }
                  >
                    Adicionar ao Carrinho
                  </button>
                </li>
              ))}
            </ul>
          )}
        {product || <p>Nenhum produto foi encontrado</p>}
      </main>
    );
  }
}
