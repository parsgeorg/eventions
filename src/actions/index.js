import * as types from '../actionTypes';
import * as api from '../api';

// import * as consts from 'actionTypes' // => consts.DELETE_EVENTION
import { getRenderedProductsLength } from '../selectors';

export const fetchProducts = () => async dispatch => {
  dispatch({ type: types.FETCH_PRODUCTS_START });

  try {
    const response = await api.fetchProducts();
    // const products = {};

    // Object.entries(response).forEach(([id, product]) => {
    //   products[id] = {id, ...product}
    // })
    // return dispatch({
    //   type: types.FETCH_PRODUCTS_SUCCESS,
    //   payload: products
    // })
    const products = [];
    Object.entries(response).forEach(([id, product]) => {
      const { name, image, price } = product;
      products.push({ id, name, price, image });
    });

    return dispatch({
      type: types.FETCH_PRODUCTS_SUCCESS,
      payload: products,
    });

  } catch (err) {
    dispatch({
      type: types.FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const loadMoreProducts = () => async (dispatch, getState) => {
  const offset = getRenderedProductsLength(getState());

  dispatch({ type: types.LOAD_MORE_PRODUCTS_START });

  try {
    const products = await api.loadMoreProducts({ offset });
    dispatch({
      type: types.LOAD_MORE_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (err) {
    dispatch({
      type: types.LOAD_MORE_PRODUCTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchProductById = id => async dispatch => {
  dispatch({ type: types.FETCH_PRODUCT_BY_ID_START });

  try {
    const product = await api.fetchProductById(id);
    const payload = {
      ...product,
      id,
    };

    dispatch({
      type: types.FETCH_PRODUCT_BY_ID_SUCCESS,
      payload,
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_PRODUCT_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const addProductToBasket = id => dispatch => {
  dispatch({
    type: types.ADD_PRODUCT_TO_BASKET,
    payload: id,
  });
};

export const searchProduct = text => dispatch => {
  dispatch({
    type: types.SEARCH_PRODUCT,
    payload: text,
  });
};

export const fetchCategories = () => async dispatch => {
  dispatch({ type: types.FETCH_CATEGORIES_START });

  try {
    const products = await api.fetchCategories();
    dispatch({
      type: types.FETCH_CATEGORIES_SUCCESS,
      payload: products,
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const removeProductFromBasket = id => async dispatch => {
  dispatch({
    type: types.REMOVE_PRODUCT_FROM_BASKET,
    payload: id,
  });
};

export const cleanBasket = () => dispatch => {
  dispatch({
    type: types.CLEAN_BASKET,
  });
};

export const basketCheckout = products => () => {
  alert(JSON.stringify(products));
};

export const changeQtyProducts = products => dispatch => {
  dispatch({
    type: types.CHANGE_QTY_PRODUCTS,
    payload: products,
  });
};

export const openModal = options => dispatch => {
  dispatch({
    type: types.OPEN_MODAL,
    payload: options,
  });
};

export const addProduct = options => async dispatch => {
  return api.addNewProduct(options);
};

export const updateProduct = options => dispatch => {
  dispatch({
    type: types.UPDATE_PRODUCT,
    payload: api.updateProduct(options),
  });
};

export const deleteEvention = id => dispatch => {
  dispatch({
    type: types.DELETE_EVENTION,
    payload: api.deleteEvention(id),
  });
};

export function addFlashMessage(message) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    message,
  };
}

export function deleteFlashMessage(id) {
  return {
    type: types.DELETE_FLASH_MESSAGE,
    id,
  };
}
