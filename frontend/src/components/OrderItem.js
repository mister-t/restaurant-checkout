import { useDispatch } from 'react-redux';
import { REMOVE_ITEM_FROM_CART } from '../constants';
import { removeItemFromCart } from '../actions/cartActions';

const Order = ({ id, name, description, price }) => {
  const dispatch = useDispatch();

  const onRemoveItemHandler = (evt) => {
    evt.preventDefault();
    console.log(`order item #${id} button clicked`);
    // dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { id, name, description, price } })
    dispatch(removeItemFromCart({ name, id }));
  };

  return (
    <article className="relative flex flex-col border p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="pr-5">${price.toFixed(2)}</h2>
      </div>
      <p className="text-slate-400">{description}</p>
      <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block cursor-pointer" onClick={onRemoveItemHandler}>
        <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
      </div>
    </article>
  )
}

export default Order;