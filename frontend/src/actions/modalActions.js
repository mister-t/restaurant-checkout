import {
  TOGGLE_MODAL,
  TOGGLE_PAYMENT_MODAL
} from '../constants';

export const togglePymtModal = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_PAYMENT_MODAL,
  });
};

export const toggleModal = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};