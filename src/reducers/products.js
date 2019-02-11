import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
} from '../actionTypes';
import * as R from 'ramda';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: payload,
      };
    case LOAD_MORE_PRODUCTS_SUCCESS:
      return state;

    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
      // return payload

    default:
      return state;
  }
};