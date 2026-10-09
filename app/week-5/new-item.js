"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    console.log(item);
    alert(`Item Added!\n${name} Category: ${category} Quantity: ${quantity}`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="text-center mt-4 p-4 rounded-full w-100 m-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="itemName" className="text-2xl">
          Item Name:
        </label>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => handleNameChange(e)}
          className="border p-2 m-2 rounded"
          required
        />
        <label htmlFor="category" className="text-2xl">
          Category:
        </label>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          className="border p-2 m-2 rounded"
          required
        >
          <option className="text-black" value="Produce">
            Produce
          </option>
          <option className="text-black" value="Dairy">
            Dairy
          </option>
          <option className="text-black" value="Bakery">
            Bakery
          </option>
          <option className="text-black" value="Meat">
            Meat
          </option>
          <option className="text-black" value="Frozen Foods">
            Frozen Foods
          </option>
          <option className="text-black" value="Canned Goods">
            Canned Goods
          </option>
          <option className="text-black" value="Dry Goods">
            Dry Goods
          </option>
          <option className="text-black" value="Beverages">
            Beverages
          </option>
          <option className="text-black" value="Snacks">
            Snacks
          </option>
          <option className="text-black" value="Household">
            Household
          </option>
          <option className="text-black" value="Other">
            Other
          </option>
        </select>

        <div>
          <label htmlFor="quantity" className="text-2xl">
            Quantity:
          </label>
          <p className="text-2xl">{quantity}</p>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-slate-500 p-2 m-2 rounded text-1xl w-10"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-slate-500 p-2 m-2 rounded text-1xl w-10"
          >
            -
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-500 p-2 m-2 rounded text-1xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
