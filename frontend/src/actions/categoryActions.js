import axios from 'axios';

import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL } from '../constants/';

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await axios.get('/api/categories');

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