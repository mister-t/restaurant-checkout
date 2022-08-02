import { useSelector } from 'react-redux';

const OrderSubmitBtn = () => {
  const { total } = useSelector(state => state.cart);

  const onClickHandler = (evt) => {
    evt.preventDefault();
    console.log(`order is submitted`);
  };

  return (
    <article className="bg-slate-800/70 h-2/3 flex flex-col items-center justify-center text-white cursor-pointer" onClick={onClickHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 my-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
      <button className="min-h-2/3 text-white text-4xl tracking-wider font-bold mb-5">ORDER</button>
      <h1 className="text-2xl tracking-wider ">${total.toFixed(2)}</h1>

    </article>
  )
}

export default OrderSubmitBtn;