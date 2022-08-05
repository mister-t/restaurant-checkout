import {
  TOGGLE_MODAL,
} from '../constants';


export const toggleModal = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};