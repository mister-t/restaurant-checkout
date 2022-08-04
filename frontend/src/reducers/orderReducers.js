import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL
} from '../constants';

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, orders: [] };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload }
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const orderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { loading: true, orders: [] };
    case ORDER_SUCCESS:
      return { loading: false, orders: action.payload }
    case ORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};