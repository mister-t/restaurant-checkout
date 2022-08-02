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
      const idxFound = state.items.findIndex(item => item.id === action.payload);
      let foundItems;
      if (idxFound > -1) {
        //update the qty of the current object
        state.items[idxFound].qty++;
        foundItems = [...state.items]
      } else {
        foundItems = [{ ...action.payload, qty: 1 }, ...state.items];
      }
      return {
        items: foundItems,
        total: foundItems.reduce((acc, item) => acc + item.price, 0)
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
      const idxDecrement = state.items.findIndex(item => item.id === action.payload);
      let decrementItems;
      if (idxDecrement > -1) {
        //update the qty of the current object
        if (state.items[idxDecrement].qty > 1) state.items[idxDecrement].qty--;
        decrementItems = [...state.items]
      } else {
        decrementItems = [{ ...action.payload, qty: 1 }, ...state.items];
      }
      return {
        ...state,
        items: decrementItems,
        total: decrementItems.reduce((acc, item) => acc + item.price, 0)
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