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
    <div className="text-center mt-4">
      <p className="text-2xl">Quantity: {quantity}</p>
      <button onClick={increment} disabled={quantity == 20} className="bg-slate-500 p-2 m-2 rounded text-3xl w-10">
        +
      </button>
      <button onClick={decrement} disabled={quantity == 1} className="bg-slate-500 p-2 m-2 rounded text-3xl w-10">
        -
      </button>
    </div>
  );
}
