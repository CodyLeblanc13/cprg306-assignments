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
    <div className="flex justify-center-safe max-w-">
      <textfield className="px-20 font-bold text-4xl">{quantity}</textfield>
      <button
        onClick={increment}
        className="bg-blue-600 p-2 rounded-2xl text-white px-5 font-bold text-3xl"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-blue-600 p-2 rounded-2xl text-white px-5 font-bold text-3xl"
      >
        -
      </button>
    </div>
  );
}
