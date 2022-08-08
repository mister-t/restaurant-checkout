const OrderThankyou = ({ onCancelHandler }) => {

  return (
    <div class="flex flex-col items-center space-y-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 class="text-4xl font-bold">Thank You !</h1>
      <p>Please keep your receipt. It will be needed when your order is ready.</p>
      <button onClick={onCancelHandler} class="inline-flex items-center px-4 py-2 text-white bg-mgPurple border border-mgPurple rounded hover:bg-indigo-700 focus:outline-none focus:ring">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span class="text-sm font-medium">
          New Order
        </span>
      </button>
    </div>
  );
}

export default OrderThankyou;