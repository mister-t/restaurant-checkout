import { useSelector } from 'react-redux';
import Modal from '../utils/Modal';
import Spinner from '../utils/Spinner';
import OrderThankyou from './OrderThankyou';
import OrderPaymentCancelBtn from './OrderPaymentCancelBtn'

const ModalPayment = ({ title = "Payment Information", paymentValues, onHandlers }) => {
  const { loading, success } = useSelector(state => state.orderCreate);
  const { onFormInputChange, onSubmit, onCancelHandler } = onHandlers;

  return (
    <Modal>
      <OrderPaymentCancelBtn onCancelHandler={onCancelHandler} />
      {success ? <OrderThankyou onCancelHandler={onCancelHandler} /> : loading ? <Spinner /> : <div className="flex flex-col items-center w-screen sm:w-full">
        <h1 className="ff-mpr1c-regular text-slate-500 text-2xl md:text-3xl tracking-tight font-bold mb-8 pt-2">{title}</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col border-2 p-8 rounded-md">
            <div className="flex justify-between mb-10">
              <section className="flex justify-start">
                <input className="accent-mgPurple focus:outline-none" id="add-new-credit-card" type="radio" defaultChecked name="cardType" value={paymentValues.cardType} onChange={onFormInputChange} />
                <label className="ml-2">Add a new card</label>
              </section>
              <section className="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </section>
            </div>
            <div className="flex flex-col items-start mb-5">
              <label className="mb-2">Name on card</label>
              <input className="w-full rounded-md pl-[10px] py-[4px] border-2 focus:outline-none " id="full-name" type="text" placeholder="John Doe" required maxLength={128} name="fullName" value={paymentValues.fullName} onChange={onFormInputChange} />
            </div>
            <div>
              <label className="inline-block text-left w-full mb-2" htmlFor="full-name">Card number</label>
              <div className="flex flex-col md:flex-row justify-between rounded-md border-2">
                <input className="w-1/2 rounded-md pl-[10px] py-[4px] focus:outline-none" id="full-name" type="text" minLength={12} maxLength={16} placeholder="Card number" required name="ccNumber" value={paymentValues.ccNumber} onChange={onFormInputChange} />
                <section className="">
                  <input id="cc-month" maxLength={2} placeholder="MM" className="w-7 focus:outline-none py-[4px]" required name="expMonth" value={paymentValues.expMonth} onChange={onFormInputChange} />
                  <span className='text-slate-800/50 mx-1 w-2'>/</span>
                  <input id="cc-year" maxLength={2} placeholder="YY" className="w-7 pr-1 focus:outline-none py-[4px]" required name="expYear" value={paymentValues.expYear} onChange={onFormInputChange} />
                  <input id="cc-cvc" minLength={3} maxLength={4} placeholder="CVC" className="w-8 mx-2 focus:outline-none py-[4px]" required name="cvc" value={paymentValues.cvc} onChange={onFormInputChange} />
                </section>
              </div>
            </div>
          </div>
          <button type="submit" className='w-1/2 p-2 rounded-sm shadow-md bg-mgPurple mt-8 text-white focus:outline-none'>Place Order</button>
        </form>
      </div>
      }
    </Modal>
  );
}

export default ModalPayment;