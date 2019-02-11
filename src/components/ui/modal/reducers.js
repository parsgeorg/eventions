import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const initialState = {
  isOpen: false,
  title: 'Модальное окно',
  btnText: 'Кнопка',
  content: null,
};

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        title: payload.title,
        btnText: payload.btnText,
        content: payload.content,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

// const ModalReducer = {
//   modal: modalReducer,
// };

// export default ModalReducer;
