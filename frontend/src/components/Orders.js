import Order from './Order';
const Orders = () => {
  const orders = [
    {
      name: 'Beyond Impossible Burger',
      description: 'Wholewheat Bun, Gouda Cheese, Lettuce',
      price: 10.00
    },
    {
      name: 'Curly Fries',
      description: '',
      price: 5.00
    },
    {
      name: 'Double-Cheese Burger',
      description: 'Quarter-pound Wagyu beef, Onions',
      price: 15.00
    },
  ];

  return (
    <section className="flex flex-col w-screen max-h-52 mx-auto md:flex-row">
      <div className="w-2/3 mx-0 p-1 bg-white/90 overflow-y-scroll">
        {
          orders.map(order => <Order order={order} />)
        }
      </div>
      <div className="w-1/3">
        <article className="bg-slate-800/90 h-1/3 text-white flex items-center justify-center border-y">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <button className="text-3xl tracking-wider">Cancel</button>
        </article>
        <article className="bg-slate-800/70 h-2/3 flex flex-col items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
          <button className="min-h-2/3 text-white text-4xl tracking-wider font-bold mb-5">ORDER</button>
          <h1 className="text-2xl tracking-wider ">$55.99</h1>
        </article>
      </div>
    </section>
  )
}

export default Orders