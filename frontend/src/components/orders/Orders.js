import { useSelector } from 'react-redux';

import OrderItem from './OrderItem';
import OrderCancel from './OrderCancelBtn';
import OrderSubmitBtn from './OrderSubmitBtn';

const Orders = () => {
  const { items } = useSelector(state => state.cart);

  return (
    <section className="flex flex-col w-screen mx-auto md:max-h-1/3 md:flex-row">
      <div className="mx-0 p-1 bg-white/90 overflow-y-scroll md:w-2/3 md:p-1">
        {
          items.length ? items.map(item => <OrderItem key={item.id} name={item.name} id={item.id} description={item.description} price={item.price} qty={item.qty} />) : <div className='h-full flex items-center justify-center'><h1 className='text-5xl text-darkSlate text-opacity-30'>Please add items</h1></div>
        }
      </div>
      <div className="flex flex-col-reverse md:flex-col md:w-1/3">
        <OrderCancel />
        <OrderSubmitBtn />
      </div>
    </section>
  )
}

export default Orders