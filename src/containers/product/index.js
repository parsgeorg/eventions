import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToBasket, fetchProductById } from '../../actions';
import { getProductById } from '../../selectors';
import View from './View';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id);
  }

  render() {
    const { product, addProductToBasket } = this.props;
    return (
      <div>
        <View product={product} addProductToBasket={addProductToBasket} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: getProductById(state, state.productPage.id),
  };
};

const mapDispatchToProps = {
  fetchProductById,
  addProductToBasket,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
