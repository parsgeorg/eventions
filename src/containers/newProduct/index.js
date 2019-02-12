import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addFlashMessage,
  addProduct,
  fetchProducts,
} from '../../actions/index';
import {
  validateAlpabetical,
  validateMaxLength,
  validateNumeric,
  validateRequired,
} from '../../helpers/Validation';
import View from './View';

class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: 0,
      nameErr: '',
      priceErr: '',
      isShowSuccessMessage: false,
      isLoading: false,
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

  checkPrice = val => {
    let err =
      validateRequired(val) ||
      validateNumeric(val) ||
      validateMaxLength(10)(val);

    if (err) return this.setState(() => ({ priceErr: err }));
    return this.setState({ priceErr: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const val = event.target.value;
    event.target.name === 'name' ? this.checkName(val) : this.checkPrice(val);
    this.setState({
      [event.target.name]: val,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props
      .addProduct(this.state)
      .then(res => {
        // this.props.addFlashMessage({
        //   type: 'success',
        //   text: 'Новое изобретение успешно добавлено!',
        // });
        this.setState({
          name: '',
          price: 0,
          isShowSuccessMessage: true,
        });
        this.props.fetchProducts();
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <div className="well blosd">
        <View
          data={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct, addFlashMessage, fetchProducts },
)(NewProduct);
