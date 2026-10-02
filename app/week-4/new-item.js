"use client"
import { useState } from "react";

export default function NewItem() {
    let [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={increment} className="rounded bg-green-700 hover:bg-green-900 p-2 m-2">Increment</button>
            <button onClick={decrement} className="rounded bg-blue-700 hover:bg-blue-900 p-2 m-2">Decrement</button>
        </div>
    )
}