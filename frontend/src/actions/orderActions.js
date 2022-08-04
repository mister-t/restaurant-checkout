import axios from 'axios';

import {
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  ROUTE_GET_ORDERS,
  ROUTE_GET_ORDER_BY_ID,
  ROUTE_POST_ORDER
} from '../constants';

export const listOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const { data } = await axios.get(ROUTE_GET_ORDERS);

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const getOrderById = (id) => async (dispatch) => {
  try {
    if (!id) throw new Error('Unable to get order: missing order ID');

    dispatch({ type: ORDER_REQUEST });

    const { data } = await axios.get(`${ROUTE_GET_ORDER_BY_ID}/${id}`);

    dispatch({
      type: ORDER_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const createOrder = (order) => async (dispatch) => {
  try {

    dispatch({ type: ORDER_CREATE_REQUEST });

    const { data } = await axios.post(`${ROUTE_POST_ORDER}`);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};