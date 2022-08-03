import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../actions/cartActions';
import OrderItemPrice from './OrderItemPrice';

const Order = ({ id, name, description, price, qty }) => {
  const dispatch = useDispatch();

  const onRemoveItemHandler = (evt) => {
    evt.preventDefault();
    dispatch(removeItemFromCart({ name, id }));
  };

  return (
    <article className="relative flex flex-col border py-2 md:p-4">
      <div className="flex justify-start md:justify-between">
        <h1 className="text-xl font-bold w-20 break-words md:w-1/3">{name}</h1>
        <OrderItemPrice id={id} price={price} qty={qty} />
      </div>
      <p className="text-slate-400">{description}</p>
      <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block cursor-pointer" onClick={onRemoveItemHandler}>
        <div className="h-16 bg-slate-300 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-600">x</div></div>
      </div>
    </article >
  )
}

export default Order;