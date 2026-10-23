"use client";
import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="mt-6 text-center">
      <p className="text-2xl text-slate-200">Quantity: {quantity}</p>
      <button onClick={increment} disabled={quantity == 20} className="m-2 w-10 rounded-lg border border-indigo-300/20 bg-slate-800 p-2 text-3xl text-teal-200 transition hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
        +
      </button>
      <button onClick={decrement} disabled={quantity == 1} className="m-2 w-10 rounded-lg border border-indigo-300/20 bg-slate-800 p-2 text-3xl text-teal-200 transition hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
        -
      </button>
    </div>
  );
}
