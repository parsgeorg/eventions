import { OPEN_MODAL } from '../actionTypes';

const initialState = {
  isOpen: false,
  title: 'Модальное окно',
  content: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        title: action.title,
      };

    default:
      return state;
  }
};
