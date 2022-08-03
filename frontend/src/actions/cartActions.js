import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM_QTY,
  REMOVE_ITEM_FROM_CART,
  DECREMENT_ITEM_QTY,
  CLEAR_CART,
} from '../constants';

export const addItemToCart = ({ name, price, id, imgSrc, description }) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: { name, price, id, imgSrc, description }
  });
};

export const removeItemFromCart = ({ name, id }) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: { name, id }
  });
};

export const incrementItemQty = (id) => async (dispatch) => {
  dispatch({
    type: INCREMENT_ITEM_QTY,
    payload: id
  });
};

export const decrementItemQty = (id) => async (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM_QTY,
    payload: id
  });
};

export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CART
  });
};