import {
  TOGGLE_MODAL,
} from '../constants';

export const modalReducer = (state = { isHidden: true, isPymtHidden: true }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
};