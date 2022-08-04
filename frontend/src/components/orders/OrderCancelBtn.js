import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import { toggleModal } from '../../actions/modalActions';
import Modal from '../utils/Modal';

const OrderCancel = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const modal = useSelector(state => state.modal);
  const [isHidden, setIsHidden] = useState(true);

  const clearOrder = () => {
    dispatch(clearCart());
    dispatch(toggleModal())
  };

  const cancelClearOrder = () => {
    dispatch(toggleModal())
  };

  const confirmCancelProps = {
    title: 'Cancel order?',
    content: 'This will clear all the items. Are you sure?',
    saveBtn: 'Clear Order',
    clearOrder,
    cancelClearOrder,
    isHidden,
  };

  const onCancelHandler = (evt) => {
    evt.preventDefault();
    if (cart.items.length > 0) {
      dispatch(toggleModal());
    }
  };

  useEffect(() => {
    // if (cart.items.length === 0) {
    //   console.log(`cart is ${cart.items.length === 0 ? 'empty' : 'not empty'}`)
    //   dispatch(toggleModal());
    // }
    setIsHidden(modal.isHidden);
  }, [dispatch, cart, modal]);

  return (
    <>
      <article className="bg-slate-800/90 h-full text-white flex items-center justify-center border-y cursor-pointer py-4 md:py-2" onClick={onCancelHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <button className="text-3xl tracking-wider">Cancel</button>
      </article>
      <Modal {...confirmCancelProps} />
    </>
  )
}

export default OrderCancel;