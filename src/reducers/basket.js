import {
  ADD_PRODUCT_TO_BASKET,
  CHANGE_QTY_PRODUCTS,
  CLEAN_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
} from '../actionTypes';

const initialState = {
  items: [],
};

export default (state = initialState, { type, payload = 0 }) => {
  switch (type) {
    case ADD_PRODUCT_TO_BASKET:
      return { ...state, items: [...state.items, payload] }; //wtf??

    case REMOVE_PRODUCT_FROM_BASKET:
      // return R.without(R.of(payload), state.items);
      console.log(state.items);
      const items = state.items.filter(item => item !== payload);
      return {
        ...state,
        items,
      };
    case CLEAN_BASKET:
      return {
        ...state,
        items: [],
      };
    case CHANGE_QTY_PRODUCTS:
      // if (state.items.includes(payload.idProduct)) {
      //   const newItems = new Array(~~payload.QtyProduct)
      //     .fill(0)
      //     .map(() => payload.idProduct);
      //   console.log(newItems);
      //   return {
      //     ...state,
      //     //items: state.items.concat(newItems),
      //     items: [...state.items, ]
      //   };
      // }

      // return state;

      let ar = [];

      if (
        state.items.indexOf(payload.idProduct) !== -1 ||
        state.items.includes(payload.idProduct)
      ) {
        state.items = state.items.filter(st => st !== payload.idProduct);
      }

      for (let i = 1; i <= payload.QtyProduct; i += 1) {
        ar && ar.push(payload.idProduct);
      }

      const resAr = state.items.concat(ar);

      // console.log(resAr);

      // return resAr;

      return {
        ...state,

        items: [...resAr],
      };

    default:
      return state;
  }
};
