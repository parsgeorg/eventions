import * as R from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeQtyProducts,
  cleanBasket,
  openModal,
  removeProductFromBasket,
} from '../../actions';
import {
  getBasketProductsWithCount,
  getTotalBasketPrice,
} from '../../selectors';
import View from './View';

class Basket extends Component {
  state = {
    modalClosed: false,
    count: 0,
  };

  // updateState = count => {
  //   this.setState((state, props) => {
  //     return {
  //       count,
  //     };
  //   });
  // };

  handleChange = (event, idProduct) => {
    const obj = { idProduct, QtyProduct: event.target.value };
    this.props.changeQtyProducts(obj);
    // this.props.changeQtyProducts([obj]);//Ол
    //this.updateState(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  checkout = () => {
    let dataOfModalWindow = {
      title: 'Покупка',
      btnText: 'Купить',
      content: this.props.totalPrice,
    };

    this.props.openModal(dataOfModalWindow);
  };

  render() {
    const {
      products,
      totalPrice,
      changeQtyProducts,
      cleanBasket,
      openModal,
      removeProductFromBasket,
    } = this.props;

    const isBasketEmpty = R.isEmpty(products);

    let modalData = [];
    modalData.push('Покупка', 'Оформить', totalPrice);

    return (
      <View
        isBasketEmpty={isBasketEmpty}
        modalData={modalData}
        methods={this}
        data={this.props}
        changeQtyProducts={changeQtyProducts}
        cleanBasket={cleanBasket}
        openModal={openModal}
        removeProductFromBasket={removeProductFromBasket}
        modalClosed={this.state.modalClosed}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state),
    productsIdwhithQty: state.productsIdwhithQty,
    modal: state.modal,
  };
};

const mapDispatchToProps = {
  removeProductFromBasket,
  cleanBasket,
  changeQtyProducts,
  openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Basket);
