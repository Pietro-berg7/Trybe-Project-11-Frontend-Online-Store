import React, { Component } from 'react';
import { string } from 'prop-types';

export default class Category extends Component {
  render() {
    const { name, id } = this.props;
    return (
      <button
        type="button"
        data-testid="category"
        name="category"
        value={ id }
        // onClick={ HandleClick }
      >
        { name }
      </button>
    );
  }
}

Category.propTypes = {
  name: string,
  id: string,
}.isResquired;
