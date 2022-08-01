import OrderItem from './OrderItem';
import OrderCancel from './OrderCancelBtn';
import OrderSubmitBtn from './OrderSubmitBtn';

const Orders = () => {
  const orders = [
    {
      id: 1,
      name: 'Beyond Impossible Burger',
      description: 'Wholewheat Bun, Gouda Cheese, Lettuce',
      price: 10.00
    },
    {
      id: 2,
      name: 'Curly Fries',
      description: '',
      price: 5.00
    },
    {
      id: 3,
      name: 'Double-Cheese Burger',
      description: 'Quarter-pound Wagyu beef, Onions',
      price: 15.00
    },
  ];

  return (
    <section className="flex flex-col w-screen max-h-52 mx-auto md:flex-row">
      <div className="w-2/3 mx-0 p-1 bg-white/90 overflow-y-scroll">
        {
          orders.map(order => <OrderItem key={order.id} name={order.name} id={order.id} description={order.description} price={order.price} />)
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