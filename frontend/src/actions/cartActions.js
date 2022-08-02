import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../constants';

export const addItemToCart = ({ name, price, id, imgSrc, description }) => async (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: { name, price, id, imgSrc, description }
  });
};

export const removeItemFromCart = ({ name, id }) => async (dispatch) => {
  console.log(`Item ${name} with ${id} removed`)
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: { name, id }
  });
};