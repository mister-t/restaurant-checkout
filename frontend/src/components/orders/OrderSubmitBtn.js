import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/orderActions';

import { ORDER_PYMT_DEFAULTS } from '../../constants';
import Modal from '../utils/Modal';

const OrderSubmitBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentValues, setPaymentValues] = useState(ORDER_PYMT_DEFAULTS);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { items, total } = cart;

  const save = order => {
    dispatch(createOrder(order));
    console.log(`order is submitted`);
    dispatch({
      type: 'CLEAR_CART'
    }); //remove if createOrder(order) is used
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
      {modalVisible && <Modal >
        <div className="flex justify-end px-8 -pt-2 sm:px-0">
          <button className="text-slate-500 font-bold focus:outline-none" onClick={onCancelHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center w-screen sm:w-full">
          <h1 className="ff-mpr1c-regular text-slate-500 text-2xl md:text-3xl tracking-tight font-bold mb-8 pt-2">Payment Information</h1>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col border-2 p-8 rounded-md">
              <div className="flex justify-between mb-10">
                <section className="flex justify-start">
                  <input className="accent-mgPurple focus:outline-none" id="add-new-credit-card" type="radio" defaultChecked name="cardType" value={paymentValues.cardType} onChange={onCardTypeChange} />
                  <label className="ml-2">Add a new card</label>
                </section>
                <section className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </section>
              </div>
              <div className="flex flex-col items-start mb-5">
                <label className="mb-2">Name on card</label>
                <input className="w-full rounded-md pl-[10px] py-[4px] border-2 focus:outline-none " id="full-name" type="text" placeholder="John Doe" required maxLength={128} name="fullName" value={paymentValues.fullName} onChange={onFullNameChange} />
              </div>
              <div>
                <label className="inline-block text-left w-full mb-2" htmlFor="full-name">Card number</label>
                <div className="flex flex-col md:flex-row justify-between rounded-md border-2">
                  <input className="w-1/2 rounded-md pl-[10px] py-[4px] focus:outline-none" id="full-name" type="text" minLength={12} maxLength={16} placeholder="Card number" required name="ccNumber" value={paymentValues.ccNumber} onChange={onCcNumberChange} />
                  <section className="">
                    <input id="cc-month" maxLength={2} placeholder="MM" className="w-7 focus:outline-none py-[4px]" required name="expMonth" value={paymentValues.expMonth} onChange={onCcMonthChange} />
                    <span className='text-slate-800/50 mx-1 w-2'>/</span>
                    <input id="cc-year" maxLength={2} placeholder="YY" className="w-7 pr-1 focus:outline-none py-[4px]" required name="expYear" value={paymentValues.expYear} onChange={onCcYearChange} />
                    <input id="cc-cvc" minLength={3} maxLength={4} placeholder="CVC" className="w-8 mx-2 focus:outline-none py-[4px]" required name="cvc" value={paymentValues.cvc} onChange={onCvcChange} />
                  </section>
                </div>
              </div>
            </div>
            <button type="submit" className='w-1/2 p-2 rounded-sm shadow-md bg-mgPurple mt-8 text-white focus:outline-none'>Place Order</button>
          </form>
        </div>
      </Modal>}
    </>
  )
}

export default OrderSubmitBtn;