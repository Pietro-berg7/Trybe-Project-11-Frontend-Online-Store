import React, { Component } from 'react';
import { string, func } from 'prop-types';

export default class Category extends Component {
  render() {
    const { name, id, fetchCategory } = this.props;
    return (
      <button
        type="button"
        data-testid="category"
        name="category"
        value={ id }
        onClick={ fetchCategory }
      >
        { name }
      </button>
    );
  }
}

Category.propTypes = {
  name: string,
  id: string,
  fetchCategory: func,
}.isResquired;
