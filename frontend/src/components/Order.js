import React from 'react'

const Order = ({ order }) => {
  const { name, description, price } = order;
  return (
    <article className="relative flex flex-col border p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="pr-5">${price.toFixed(2)}</h2>
      </div>
      <p className="text-slate-400">{description}</p>
      <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block">
        <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
      </div>
    </article>
  )
}

export default Order;