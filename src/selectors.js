import * as R from 'ramda';

export const getActiveCategoryId = ownProps =>
  R.path(['params', 'id'], ownProps);
export const getProductById = (state, id) => {
  return state.products.items.find(product => product.id === id);
};

export const getProducts = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);

  const applySearch = item =>
    R.contains(state.productsPage.search, R.prop('name', item));

  const applyCategory = item =>
    R.equals(activeCategoryId, R.prop('categoryId', item));

  const products = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getProductById(state, id)),
  )(state.productsPage.ids);

  return products;
};

export const getCategories = state => {
  return Object.values(state.categories);
};

export const getRenderedProductsLength = state => state.productsPage.ids.length;

export const getTotalBasketCount = state =>
  state.basket.items && state.basket.items.length;

export const getTotalBasketPrice = state => {
  /** //TODO:
   * тут бы перепилить state.products/basket.items на обьект.
   * где ключами выступают айдишники.
   * чтобы через state.products.items[id] доставать
   */
  const { basket, products } = state;
  // if (!basket.items.length || !products.items.length) {
  //   console.log('getTotalBasketPrice: why оно вызывается?');
  //   return;
  // }
  const counts = {};
  let sum = 0;
  basket.items &&
    basket.items.forEach(id => (counts[id] = counts[id] + 1 || 1));

  products.items.forEach(({ id, price }) => {
    if (Object.keys(counts).includes(id)) sum += Number(price) * counts[id];
  });
  return sum;
};

export const getBasketProductsWithCount = state => {
  const counts = {};
  const result = [];

  if (state.basket.items) {
    state.basket.items.forEach(id => (counts[id] = counts[id] + 1 || 1));
    state.products.items.forEach(product => {
      const id = product.id;
      if (Object.keys(counts).includes(id)) {
        result.push({ ...product, count: counts[id] });
      }
    });
  }
  console.log(result);
  return result;

  // const productCount = id =>
  //   R.compose(
  //     R.length,
  //     R.filter(basketId => R.equals(id, basketId)),
  //   )(state.basket.items);

  // const productWithCount = product =>
  //   R.assoc('count', productCount(product.id), product);

  // return (
  //   state.basket.items &&
  //   state.basket.items
  //     .map(id => getProductById(state, id))
  //     .map(productWithCount)
  // );
};
