import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/orderActions';

import Modal from '../utils/Modal';

const OrderSubmitBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [choice, setChoice] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { items, total } = cart;

  const modal = useSelector(state => state.modal);

  const save = order => {
    // dispatch(createOrder(order));
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
    if (cart.items.length) {
      setModalVisible(true);
    }
    // save({
    //   items,
    //   total,
    //   "payment": {
    //     "cardType": "Visa",
    //     "nameOnCard": "John Doe",
    //     "expirationMonth": 11,
    //     "expirationYear": 26,
    //     "cvc": 123
    //   }
    // });
  };

  useEffect(() => {
    if (choice) {
      console.log(`The answer is Yes: ${Date.now()}`)
    } else {
      console.log(`The answer is NO: ${Date.now()}`)
    }
  }, [dispatch, cart, modal, choice]);

  return (
    <>
      <article className="bg-slate-800/70 flex flex-col-reverse items-center justify-center text-white cursor-pointer select-none md:flex-col py-2 md:py-2" onClick={onPayOrder}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-12 md:w-12 my-2 md:block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        <button className="min-h-2/3 text-white text-5xl tracking-wider font-bold mb-5 md:text-4xl">ORDER</button>
        <h1 className="text-5xl tracking-wider underline underline-offset-8 pb-5 md:text-2xl md:no-underline md:pb-0
        ">${total.toFixed(2)}</h1>
      </article>
      {modalVisible && <Modal >
        <div class="flex justify-end -pt-2">
          <button className="text-slate-500 font-bold" onClick={onCancelHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg></button>

        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="ff-mpr1c-regular text-slate-500 text-2xl md:text-3xl tracking-tight font-bold mb-8 pt-2">Payment Information</h1>
          <form className="flex flex-col border-2 p-8 ">
            <div class="flex justify-between mb-10">
              <section className="w-1/2 flex justify-start">
                <input className="text-indigo-600" id="add-new-credit-card" type="radio" name="cardType" value="Add a new card" />
                <label className="ml-2">Add a new card</label>
              </section>
              <section className="w-1/2 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </section>
            </div>
            <div class="flex flex-col items-start mb-5">
              <label className="">Name on card</label>
              <input className="w-full rounded-md border-2 " id="full-name" type="text" placeholder="John doe" />
            </div>
            <div>
              <label className="inline-block text-left w-full" for="full-name">Card number</label>
              <div className="flex justify-between border-2">
                <input className="w-1/3 rounded-md" id="full-name" type="text" placeholder="Card number" />
                <section className="">
                  <input id="cc-month" maxLength={2} placeholder="MM" className="w-8" />
                  <span className=''>/</span>
                  <input id="cc-year" maxLength={2} placeholder="YY" className="w-8" />
                  <input id="cc-cvc" maxLength={3} placeholder="CVC" className="w-12" />
                </section>
              </div>
            </div>
          </form>
          <button className='w-1/2 p-2 rounded-sm shadow-md bg-mgPurple mt-5 text-white'>Place Order</button>
        </div>
      </Modal>}
    </>
  )
}

export default OrderSubmitBtn;