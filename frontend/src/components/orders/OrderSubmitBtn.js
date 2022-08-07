import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/orderActions';

import { ORDER_PYMT_DEFAULTS } from '../../constants';
import ModalSubmitOrder from '../utils/ModalSubmitOrder';

const OrderSubmitBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentValues, setPaymentValues] = useState(ORDER_PYMT_DEFAULTS);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { items, total } = cart;

  const save = order => {
    dispatch(createOrder(order));
    console.log(`order is submitted`);
  };

  const onCancelHandler = (evt) => {
    evt.preventDefault();
    setModalVisible(false);
  };

  const onPayOrder = (evt) => {
    evt.preventDefault();
    if (items.length) {
      setModalVisible(true);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(paymentValues)
    save({ items, payment: paymentValues, total });
    setModalVisible(false); //hide modal
    setPaymentValues(ORDER_PYMT_DEFAULTS); //reset values if succesful
  };

  const onCardTypeChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      cardType: evt.target.value
    }));
  };

  const onFullNameChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      fullName: evt.target.value
    }));
  };

  const onCcNumberChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      ccNumber: Number(evt.target.value)
    }));
  };

  const onCcMonthChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      expMonth: Number(evt.target.value)
    }));
  };

  const onCcYearChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      expYear: Number(evt.target.value)
    }));
  };

  const onCvcChange = evt => {
    evt.persist();
    setPaymentValues(values => ({
      ...values,
      cvc: Number(evt.target.value)
    }));
  };

  const onHandlers = {
    onSubmit,
    onPayOrder,
    onCancelHandler,
    onCvcChange,
    onCardTypeChange,
    onFullNameChange,
    onCcNumberChange,
    onCcMonthChange,
    onCcYearChange
  };

  const modalProps = {
    onHandlers,
    paymentValues
  };

  return (
    <>
      <article className="bg-slate-800/70 flex flex-col-reverse items-center justify-center text-white cursor-pointer select-none md:flex-col md:py-2" onClick={onPayOrder}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-12 md:w-12 my-2 md:block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        <button className="min-h-2/3 text-white text-5xl tracking-wider font-bold mb-5 md:text-4xl">ORDER</button>
        <h1 className="text-5xl tracking-wider underline underline-offset-8 pb-5 md:text-2xl md:no-underline md:pb-0
        ">${total.toFixed(2)}</h1>
      </article>
      {modalVisible && <ModalSubmitOrder {...modalProps} />}
    </>
  )
}

export default OrderSubmitBtn;