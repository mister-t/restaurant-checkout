import { useDispatch, useSelector } from 'react-redux';

import OrderItem from './OrderItem';
import OrderCancel from './OrderCancelBtn';
import OrderSubmitBtn from './OrderSubmitBtn';
import { useEffect } from 'react';

const Orders = () => {
  const { items } = useSelector(state => state.cart);

  return (
    <section className="flex flex-col w-screen max-h-52 mx-auto md:flex-row">
      <div className="w-2/3 mx-0 p-1 bg-white/90 overflow-y-scroll">
        {
          items.map(item => <OrderItem key={item.id} name={item.name} id={item.id} description={item.description} price={item.price} />)
        }
      </div>
      <div className="w-1/3">
        <OrderCancel />
        <OrderSubmitBtn />
      </div>
    </section>
  )
}

export default Orders