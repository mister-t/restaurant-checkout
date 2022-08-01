import {
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
  ITEM_LIST_FAIL,
  ITEMS_BY_CATEGORY_REQUEST,
  ITEMS_BY_CATEGORY_SUCCESS,
  ITEMS_BY_CATEGORY_FAIL
} from '../constants';

export const itemListReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_LIST_REQUEST:
      return { loading: true, items: [] };
    case ITEM_LIST_SUCCESS:
      return { loading: false, items: action.payload }
    case ITEM_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const itemsByCategoryReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEMS_BY_CATEGORY_REQUEST:
      return { loading: true, items: [] };
    case ITEMS_BY_CATEGORY_SUCCESS:
      return { loading: false, items: action.payload }
    case ITEMS_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};