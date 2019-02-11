import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addProductToBasket,
  fetchCategories,
  fetchProducts,
  loadMoreProducts,
} from '../../actions';
import View from './View';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <View data={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  loadMoreProducts,
  addProductToBasket,
  fetchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
