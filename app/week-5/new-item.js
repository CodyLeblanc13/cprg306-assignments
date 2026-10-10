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
    alert(`Item Added!\n${name} Category: ${category}, Quantity: ${quantity}`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const categoryList = [
    { value: "Produce", label: "produce" },
    { value: "Dairy", label: "dairy" },
    { value: "Bakery", label: "bakery" },
    { value: "Meat", label: "meat" },
    { value: "Frozen Foods", label: "frozen foods" },
    { value: "Canned Goods", label: "canned goods" },
    { value: "Dry Goods", label: "dry goods" },
    { value: "Beverages", label: "beverages" },
    { value: "Snacks", label: "snacks" },
    { value: "Household", label: "household" },
    { value: "Other", label: "other" }
  ];

  return (
    <div className="flex justify-center mt-4 p-4 rounded-full m-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-slate-700 p-4 rounded-lg w-1/2"
      >
        <div className="flex flex-col items-center">
          <label htmlFor="itemName" className="text-2xl">
            Item Name:
          </label>
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => handleNameChange(e)}
            className="border p-2 m-2 rounded w-3/4"
            required
          />
          <label htmlFor="category" className="text-2xl">
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e)}
            className="border p-2 m-2 rounded w-3/4"
          >
            {categoryList.map((cat) => (
              <option key={cat.label} className="text-black" value={cat.value}>
                {cat.value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-slate-500 p-2 m-2 rounded text-2xl w-10"
          >
            -
          </button>
          <p className="text-2xl m-2">{quantity}</p>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-slate-500 p-2 m-2 rounded text-2xl w-10"
          >
            +
          </button>
        </div>
        <button type="submit" className="bg-green-500 p-2 m-2 rounded text-1xl">
          Add Item
        </button>
      </form>
    </div>
  );
}
