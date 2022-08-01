import axios from 'axios';

import {
  GET_ACTIVE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  RESET_ACTIVE_CATEGORY,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  ROUTE_GET_CATEGORIES
} from '../constants/';

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get(ROUTE_GET_CATEGORIES);

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const getActiveCategory = () => async (dispatch, getState) => {
  try {
    const { activeCategory } = getState();
    dispatch({ type: GET_ACTIVE_CATEGORY, payload: activeCategory });
  } catch (err) {
    dispatch({
      type: GET_ACTIVE_CATEGORY,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const setActiveCategory = ({ activeCategoryId, activeCategoryName }) => async (dispatch) => {
  try {
    dispatch({ type: SET_ACTIVE_CATEGORY, payload: { activeCategoryId, activeCategoryName } });
  } catch (err) {
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};

export const resetActiveCategory = () => async (dispatch) => {
  try {
    dispatch({ type: RESET_ACTIVE_CATEGORY });
  } catch (err) {
    dispatch({
      type: RESET_ACTIVE_CATEGORY,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    });
  }
};