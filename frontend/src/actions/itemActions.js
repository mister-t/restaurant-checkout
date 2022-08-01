import axios from 'axios';

import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEMS_BY_CATEGORY_REQUEST,
  ITEMS_BY_CATEGORY_SUCCESS,
  ITEMS_BY_CATEGORY_FAIL,
  ROUTE_GET_ITEMS,
  ROUTE_GET_ITEMS_BY_CATEGORY
} from '../constants/';

export const listItems = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });

    const apiRoute = categoryId ? `${ROUTE_GET_ITEMS_BY_CATEGORY}/${categoryId}` : ROUTE_GET_ITEMS;
    const { data } = await axios.get(apiRoute);

    dispatch({
      type: ITEM_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ITEM_LIST_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const listItemsByCategory = (id) => async (dispatch) => {
  try {
    if (!id) throw new Error('Unable to get items by category: missing category ID');

    dispatch({ type: ITEMS_BY_CATEGORY_REQUEST });

    const { data } = await axios.get(`${ROUTE_GET_ITEMS_BY_CATEGORY}/${id}`);

    dispatch({
      type: ITEMS_BY_CATEGORY_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ITEMS_BY_CATEGORY_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};