import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, clearOrder } from '../../actions/orderActions';

import { ORDER_PYMT_DEFAULTS } from '../../constants';
import ModalPayment from './ModalPayment';

import validate from './PaymentValidationRules';

const OrderSubmitBtn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentValues, setPaymentValues] = useState(ORDER_PYMT_DEFAULTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { items, total } = cart;

  useEffect(() => {
    const save = order => {
      dispatch(createOrder(order));
    };

    // console.log('=====')
    // console.log('in use effect')
    // console.log(`errors: ${JSON.stringify(errors)}`)
    // console.log(`items: ${JSON.stringify(items)}`)
    // console.log(`isSubmitting: ${JSON.stringify(isSubmitting)}`)
    // console.log('=====')
    if (Object.keys(errors).length === 0 && items.length && isSubmitting) {
      save({ items, payment: paymentValues, total });
      setIsSubmitting(false);
      setPaymentValues(ORDER_PYMT_DEFAULTS); //reset values if succesfull
    }
  }, [dispatch, errors, isSubmitting, items, paymentValues, total]);

  const onCancelHandler = (evt) => {
    evt.preventDefault();
    setModalVisible(false);
    setPaymentValues(ORDER_PYMT_DEFAULTS);
    dispatch(clearOrder());
  };

  const onPayOrder = (evt) => {
    evt.preventDefault();
    if (items.length) {
      setModalVisible(true);
      setErrors({});
      setIsSubmitting(false);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    setErrors(validate(paymentValues));
    setIsSubmitting(true);
    // console.log(errors)
  };

  const onFormInputChange = evt => {
    evt.persist();
    // console.log(`${evt.target.name}: ${evt.target.value}`);
    setPaymentValues(values => ({
      ...values,
      [evt.target.name]: Number(evt.target.value) ? Number(evt.target.value) : evt.target.value
    }));
  };

  const onHandlers = {
    onFormInputChange,
    onSubmit,
    onCancelHandler
  };

  const modalProps = {
    onHandlers,
    paymentValues,
    errors
  };

  return (
    <>
      <article className="bg-slate-800/70 flex flex-col-reverse items-center justify-center text-white cursor-pointer select-none pt-3 md:flex-col md:py-2" onClick={onPayOrder}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:h-12 md:w-12 my-2 md:block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        <button className="min-h-2/3 text-white text-5xl tracking-wider font-bold mb-5 md:text-4xl">ORDER</button>
        <h1 className="text-5xl tracking-wider underline underline-offset-8 pb-5 md:text-2xl md:no-underline md:pb-0
        ">${total.toFixed(2)}</h1>
      </article>
      {modalVisible && <ModalPayment {...modalProps} />}
    </>
  )
}

export default OrderSubmitBtn;