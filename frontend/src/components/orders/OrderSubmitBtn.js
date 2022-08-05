import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/orderActions';
import { togglePymtModal } from '../../actions/modalActions';
import { MODAL_PROPS } from '../../constants';

import ModalPayment from '../utils/ModalPayment';
import Modal from '../utils/Modal';

const OrderSubmitBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [choice, setChoice] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { items, total } = cart;

  const modal = useSelector(state => state.modal);
  const [isHidden, setIsHidden] = useState(true);

  const { PAYMENT_PROMPTS } = MODAL_PROPS;
  const cancel = () => {
    dispatch(togglePymtModal());
  };
  const save = order => {
    // dispatch(createOrder(order));
    console.log(`order is submitted`);
    dispatch(togglePymtModal());
    dispatch({
      type: 'CLEAR_CART'
    }); //remove if createOrder(order) is used
  };

  const onPayOrder = (evt) => {
    evt.preventDefault();
    if (cart.items.length) {
      // dispatch(togglePymtModal());
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

  const payOrderModalProps = {
    ...PAYMENT_PROMPTS,
    cancel,
    save,
    isHidden,
  };
  useEffect(() => {
    setIsHidden(modal.isPymtHidden);

    if (choice) {
      console.log(`The answer is Yes: ${Date.now()}`)
    } else {
      console.log(`The answer is NO: ${Date.now()}`)
    }
  }, [dispatch, cart, modal, choice]);

  return (
    <>
      <article className="bg-slate-800/70 flex flex-col-reverse items-center justify-center text-white cursor-pointer select-none md:flex-col py-2 md:py-2" onClick={onPayOrder}>
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:h-12 md:w-12 my-2 md:block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        <button className="min-h-2/3 text-white text-5xl tracking-wider font-bold mb-5 md:text-4xl">ORDER</button>
        <h1 className="text-5xl tracking-wider underline underline-offset-8 pb-5 md:text-2xl md:no-underline md:pb-0
        ">${total.toFixed(2)}</h1>
      </article>
      {/* <ModalPayment {...payOrderModalProps} /> */}
      {modalVisible && <Modal setModalVisible={setModalVisible} setChoice={setChoice} />}
    </>
  )
}

export default OrderSubmitBtn;