import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import authReducer from './auth';
import basket from './basket';
import categories from './categories';
import flashMessages from './flashMessages';
import modal from './modal';
import productPage from './productPage';
import products from './products';
import productsPage from './productsPage';

export default combineReducers({
  routing: routerReducer,
  products,
  productsPage,
  productPage,
  basket,
  categories,
  flashMessages,
  modal,
  auth: authReducer,
});
