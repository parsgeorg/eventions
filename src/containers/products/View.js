import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const View = props => {
  const { products, addProductToBasket } = props.data;

  const renderProduct = product => {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={product.id}>
        <div className="thumbnail">
          <Link to={`/edit/${product.id}`} className="btn btn-primary">
            Ред.
          </Link>
          <Link to={`/delete/${product.id}`} className="btn btn-danger">
            -
          </Link>
          <img
            className="img-thumbnail"
            src={product.image}
            alt={product.name}
          />
          <div className="caption">
            <h4 className="pull-right">${product.price}</h4>
            <h4>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h4>
            <p />
            <p className="itemButton">
              <button
                className="btn btn-success"
                onClick={() => addProductToBasket(product.id)}
              >
                Купить
              </button>
              <NavLink
                to={`/products/${product.id}`}
                className="btn btn-default"
              >
                Подробнее
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="books row">
        {products.slice(0, 4).map(product => renderProduct(product))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={() =>
              products.slice(4, 8).map(product => renderProduct(product))
            }
            className="pull-right btn btn-primary"
          >
            Загрузить еще
          </button>
        </div>
      </div>
    </>
  );
};
export default View;
