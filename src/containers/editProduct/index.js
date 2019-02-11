import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductById, updateProduct } from '../../actions';
import {
  validateAlpabetical,
  validateMaxLength,
  validateNumeric,
  validateRequired,
} from '../../helpers/Validation';
import { getProductById } from '../../selectors';
import View from './View';

//возможно, убрать валидацию required
class EditProduct extends Component {
  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id);
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0,
      nameErr: '',
      priceErr: '',
    };
  }

  checkName = val => {
    let err =
      validateRequired(val) ||
      validateAlpabetical(val) ||
      validateMaxLength(16)(val);

    if (err) return this.setState({ nameErr: err });
    return this.setState({ nameErr: '' });
  };

  changeName = event => {
    event.preventDefault();
    const name = event.target.value;
    this.checkName(name);
    this.setState({
      name,
    });
  };

  checkPrice = val => {
    let err =
      validateRequired(val) ||
      validateNumeric(val) ||
      validateMaxLength(10)(val);

    if (err) return this.setState(() => ({ priceErr: err }));
    return this.setState({ priceErr: '' });
  };

  changePrice = event => {
    event.preventDefault();
    const price = event.target.value;
    this.checkPrice(price);
    this.setState({
      price,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const updateProduct = {
      id: this.props.match.params.id,
      name: this.state.name,
      price: this.state.price,
    };
    this.props.updateProduct(updateProduct);
  };

  render() {
    const { product } = this.props;
    const { name, price, nameErr, priceErr } = this.state;

    return (
      <View
        product={product}
        changeName={this.changeName}
        changePrice={this.changePrice}
        name={name}
        price={price}
        nameErr={nameErr}
        priceErr={priceErr}
        handleSubmit={this.handleSubmit}
        nameInState={this.state.name}
        priceInState={this.state.price}
      />
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
  updateProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProduct);
