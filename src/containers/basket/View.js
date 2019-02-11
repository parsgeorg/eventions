import * as R from 'ramda';
import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../components/ui/modal';

const View = props => {
  const {
    isBasketEmpty,
    //changeQtyProducts,
    cleanBasket,
    //openModal,
    removeProductFromBasket,
    modalData,
  } = props;

  const { products, totalPrice, modal } = props.data;
  const { handleChange, checkout } = props.methods;

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div>
              {isBasketEmpty && <div>Ваша корзина пуста!</div>}
              {modal.isOpen && (
                <Modal show={true} modalClosed={props.modalClosed}>
                  {modalData}
                </Modal>
              )}

              <div className="table-responsive">
                <table className="table-bordered table-striped table-condensed cf">
                  <tbody>
                    {products &&
                      products.map(product => (
                        <tr key={product.id} className="item-checout">
                          <td className="first-column-checkout">
                            <img
                              className="img-thumbnail"
                              src={product.image}
                              alt={product.name}
                              title={product.name}
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>${product.price}</td>
                          <td>
                            <input
                              type="text"
                              value={product.count}
                              onChange={e => handleChange(e, product.id)}
                              placeholder={product.count}
                            />
                          </td>
                          <td>
                            <span
                              className="delete-cart"
                              onClick={() =>
                                removeProductFromBasket(product.id)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {R.not(isBasketEmpty) && (
                <div className="row">
                  <div className="pull-right total-user-checkout">
                    <b>Total:</b>${totalPrice}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 btn-user-checkout">
            <div>
              <Link className="btn btn-info" to="/">
                <span className="glyphicon glyphicon-info-sign" />
                <span>Продолжить покупки</span>
              </Link>
              {R.not(isBasketEmpty) && (
                <div>
                  <button onClick={cleanBasket} className="btn btn-danger">
                    <span className="glyphicon glyphicon-trash" />
                    Очистить корзину
                  </button>
                  <button onClick={checkout} className="btn btn-success">
                    <span className="glyphicon glyphicon-envelope" />
                    Купить
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
