import React from 'react';
import { Link } from 'react-router-dom';

const View = props => {
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
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${product.price}</h4>
          <h4>{product.name}</h4>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    const {
      name,
      price,
      nameErr,
      priceErr,
      nameInState,
      priceInState,
      changeName,
      changePrice,
      handleSubmit,
      product,
    } = props;

    return (
      <div>
        <p className="lead">Редактирование товара</p>

        <div className="form-group">
          <h1>
            <input
              type="text"
              value={nameInState ? nameInState : product.name} //name
              onChange={changeName}
              className={`form-control ${nameErr && 'errField'}`}
            />
          </h1>
          {nameErr && <div className="err">{nameErr}</div>}
          <h2>
            <input
              type="text"
              value={priceInState ? priceInState : product.price} //price
              onChange={changePrice}
              className={`form-control ${priceErr && 'errField'}`}
            />
          </h2>
          {priceErr && <div className="err">{priceErr}</div>}
        </div>
        <button
          className="btn btn-success btn-block"
          onClick={handleSubmit}
          disabled={priceErr || nameErr || !price || !name}
        >
          Сохранить
        </button>
        <Link to="/" className="btn btn-info btn-block">
          На главную
        </Link>
      </div>
    );
  };

  const product = props.product;
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
