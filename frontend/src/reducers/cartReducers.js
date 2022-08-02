import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../constants';

export const cartReducer = (state = { items: [], total: 0 }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const cartItems = [action.payload, ...state.items];
      return {
        items: cartItems,
        total: cartItems.reduce((acc, item) => acc + item.price, 0)
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => {
          return item.id !== action.payload.id
        })
      }
    default:
      return state;
  }
};