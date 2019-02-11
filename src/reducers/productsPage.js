import * as R from 'ramda';

import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
} from '../actionTypes';

const initialState = {
  ids: [],
  search: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload),
      });
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        ids: R.concat(ids, state.ids),
      });
    case SEARCH_PRODUCT:
      return R.merge(state, {
        search: payload,
      });

    default:
      return state;
  }
};
