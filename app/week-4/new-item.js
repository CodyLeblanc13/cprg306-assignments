"use client";
import { useState } from "react";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
    }
  };

  return (
    <div className="flex bg-slate-400 w-64 justify-center rounded-2xl p-4">
      <p className="flex justify-center items-center w-40 font-bold text-4xl text-black bg-white rounded-2xl mr-3">
        {quantity}
      </p>
      <button
        onClick={increment}
        className="bg-blue-600 p-2 rounded-2xl text-white px-4 font-bold text-3xl m-1"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-blue-600 p-2 rounded-2xl text-white px-5 font-bold text-3xl m-1"
      >
        -
      </button>
    </div>
  );
}
