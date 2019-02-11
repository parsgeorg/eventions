import * as R from 'ramda';
import React from 'react';
import { Link } from 'react-router-dom';
import BasketCart from '../../components/basketCart';

const View = props => {
  const product = props.product;

  const renderFields = () => {
    const { product } = props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'cpu',
        'camera',
        'size',
        'weight',
        'display',
        'battery',
        'memory',
      ]),
    )(product);

    return columnFields.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  };

  const renderContent = () => {
    const { product } = props;

    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-thumbnail"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="col-md-6">{renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${product.price}</h4>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    const { product, addProductToBasket } = props;
    return (
      <div>
        <p className="lead">Quick shop</p>
        <BasketCart />
        <div className="form-group">
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
        </div>
        <Link to="/" className="btn btn-info btn-block">
          Back to store
        </Link>
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={() => addProductToBasket(product.id)}
        >
          Add to cart
        </button>
      </div>
    );
  };

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{product && renderContent()}</div>
          <div className="col-md-3">{product && renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};
export default View;
