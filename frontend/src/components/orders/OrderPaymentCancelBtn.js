const OrderPaymentCancelBtn = ({ onCancelHandler }) => {

  return (
    <div className="flex justify-end px-8 -pt-2 sm:px-0">
      <button className="text-slate-500 font-bold focus:outline-none" onClick={onCancelHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default OrderPaymentCancelBtn;