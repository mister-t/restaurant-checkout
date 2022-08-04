import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/orderActions';
import { toggleModal } from '../../actions/modalActions';

import Modal from '../utils/Modal';

const OrderSubmitBtn = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(state => state.cart);
  const modal = useSelector(state => state.modal);
  const [isHidden, setIsHidden] = useState(true);

  const submitOrder = order => {
    dispatch(createOrder(order));
  };

  const onClickHandler = (evt) => {
    evt.preventDefault();
    submitOrder({
      items,
      total,
      "payment": {
        "cardType": "Visa",
        "nameOnCard": "John Doe",
        "expirationMonth": 11,
        "expirationYear": 26,
        "cvc": 123
      }
    });
    console.log(`order is submitted`);
  };

  return (
    <article className="bg-slate-800/70 flex flex-col-reverse items-center justify-center text-white cursor-pointer md:flex-col py-2 md:py-2" onClick={onClickHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:h-12 md:w-12 my-2 md:block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
      <button className="min-h-2/3 text-white text-5xl tracking-wider font-bold mb-5 md:text-4xl">ORDER</button>
      <h1 className="text-5xl tracking-wider underline underline-offset-8 pb-5 md:text-2xl md:no-underline md:pb-0
      ">${total.toFixed(2)}</h1>
    </article>
  )
}

export default OrderSubmitBtn;