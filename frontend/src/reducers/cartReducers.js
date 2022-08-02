import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM_QTY,
  REMOVE_ITEM_FROM_CART,
  DECREMENT_ITEM_QTY,
  CLEAR_CART,
} from '../constants';

export const cartReducer = (state = { items: [], total: 0 }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const idx = state.items.findIndex(item => item.id === action.payload.id);
      let addedItems;
      if (idx > -1) {
        //update the qty of the current object
        state.items[idx].qty++;
        addedItems = [...state.items]
      } else {
        //add the new item to the items array
        addedItems = [{ ...action.payload, qty: 1 }, ...state.items];
      }
      return {
        items: addedItems,
        total: addedItems.reduce((acc, item) => acc + item.price, 0)
      };
    case INCREMENT_ITEM_QTY:
      console.log(`incrementing item ${action.payload}`)
      return {
        ...state
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
    case DECREMENT_ITEM_QTY:
      console.log(`decrementing item ${action.payload}`)
      return {
        ...state,
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