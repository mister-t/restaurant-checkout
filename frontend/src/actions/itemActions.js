import axios from 'axios';

import { ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS, ITEM_LIST_FAIL } from '../constants/';

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST });

    const { data } = await axios.get('/api/items');

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