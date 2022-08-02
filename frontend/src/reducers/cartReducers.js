import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants';

export const cartReducer = (state = { items: [], total: 0 }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const addedItems = [action.payload, ...state.items];
      return {
        items: addedItems,
        total: addedItems.reduce((acc, item) => acc + item.price, 0)
      };
    case REMOVE_ITEM_FROM_CART:
      const cartItems = state.items.filter(item => {
        return item.id !== action.payload.id
      });
      return {
        ...state,
        items: cartItems,
        total: cartItems.reduce((acc, item) => acc + item.price, 0)
      }
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0
      };
    default:
      return state;
  }
};