import { useDispatch } from 'react-redux';
import { removeItemFromCart, incrementItemQty, decrementItemQty } from '../actions/cartActions';

const Order = ({ id, name, description, price, qty }) => {
  const dispatch = useDispatch();

  const onRemoveItemHandler = (evt) => {
    evt.preventDefault();
    dispatch(removeItemFromCart({ name, id }));
  };

  const onDecrementHandler = (evt) => {
    evt.preventDefault();
    dispatch(decrementItemQty(id));
  };

  const onIncrementHandler = (evt) => {
    evt.preventDefault();
    dispatch(incrementItemQty(id));
  };

  return (
    <article className="relative flex flex-col border p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <span className="flex items-center justify-center mr-16">
          <span className='inline-block h-10 w-10 text-3xl text-white text-center rounded-full bg-darkSlate cursor-pointer select-none' onClick={onDecrementHandler}>-</span>
          <span className="mx-6 w-20">${price.toFixed(2)} X {qty}</span>
          <span className='inline-block h-10 w-10 text-3xl text-white text-center rounded-full bg-darkSlate cursor-pointer select-none' onClick={onIncrementHandler}>+</span>
        </span>
      </div>
      <p className="text-slate-400">{description}</p>
      <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block cursor-pointer" onClick={onRemoveItemHandler}>
        <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
      </div>
    </article>
  )
}

export default Order;