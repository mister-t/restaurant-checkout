import {
  GET_ACTIVE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  RESET_ACTIVE_CATEGORY,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL
} from '../constants/';

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload }
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
};

export const activeCategoryReducer = (state = { activeCategoryId: '' }, action) => {
  switch (action.type) {
    case GET_ACTIVE_CATEGORY:
      return { activeCategoryId: state.activeCategoryId };
    case SET_ACTIVE_CATEGORY:
      return { activeCategoryId: action.payload };
    case RESET_ACTIVE_CATEGORY:
      return { activeCategoryId: '' };
    default:
      return state;
  }
};
