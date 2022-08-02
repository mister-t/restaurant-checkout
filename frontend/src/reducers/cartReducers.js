import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../constants';

export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { items: [...state.items, action.payload] };
    case REMOVE_ITEM_FROM_CART:
      return { items: action.payload }
    default:
      return state;
  }
};