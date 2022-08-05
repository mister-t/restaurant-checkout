import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import Modal from '../utils/Modal';

const OrderCancel = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const onCancelHandler = (evt) => {
    evt.preventDefault();
    if (cart.items.length > 0) {
      //show modal if order items exist
      setModalVisible(true);
    }
  };

  const onYesHandler = evt => {
    setModalVisible(false);
    dispatch(clearCart());
  };

  const onNoHandler = evt => {
    setModalVisible(false);
  };

  return (
    <>
      <article className="bg-slate-800/90 h-full text-white flex items-center justify-center border-y cursor-pointer py-4 md:py-2" onClick={onCancelHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <button className="text-3xl tracking-wider">Cancel</button>
      </article>
      {modalVisible && <Modal setModalVisible={setModalVisible}>
        <h1 className="text-slate-500 text-6xl md:text-5xl tracking-wide font-bold mb-8 pt-2">Cancel order?</h1>
        <button className="w-1/3 mx-1 bg-slate-800/90 rounded font-bold text-xl px-4 py-2 text-white text-center md:mx-4 md:w-1/4" onClick={onYesHandler}>Yes</button>
        <button className="w-1/3 mx-1 bg-mgPurple rounded font-bold text-xl px-4 py-2 text-white text-center md:mx-4 md:w-1/4" onClick={onNoHandler}>No</button>
      </Modal>}
    </>
  )
}

export default OrderCancel;