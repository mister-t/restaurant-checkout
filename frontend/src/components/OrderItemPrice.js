import { useDispatch } from 'react-redux';
import { incrementItemQty, decrementItemQty } from '../actions/cartActions';

const OrderItemPrice = ({ id, price, qty }) => {
  const dispatch = useDispatch();

  const onDecrementHandler = (evt) => {
    evt.preventDefault();
    dispatch(decrementItemQty(id));
  };

  const onIncrementHandler = (evt) => {
    evt.preventDefault();
    dispatch(incrementItemQty(id));
  };

  return (
    <span className='md:mr-6'>
      <span className={`inline-block h-12 w-12 text-4xl md:h-10 md:w-10 md:text-3xl text-white text-center rounded-full cursor-pointer select-none ${qty > 1 ? 'bg-darkSlate' : 'bg-slate-200'}`} onClick={onDecrementHandler}>-</span>
      <span className="inline-block text-center mx-2 text-xl font-bold w-32 md:mx-6 md:font-normal">${price.toFixed(2)} X {qty}</span>
      <span className='inline-block h-12 w-12 text-4xl md:h-10 md:w-10 md:text-3xl text-white text-center rounded-full bg-darkSlate cursor-pointer select-none' onClick={onIncrementHandler}>+</span>
    </span>
  )
}

export default OrderItemPrice;