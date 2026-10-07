"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const buttonStyle =
    "bg-blue-600 p-2 rounded-2xl text-white font-bold text-3xl m-1 disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed disabled:active:scale-100";

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Week 5
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert("");
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => handleBreedChange(e)}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => handleAgeChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="flex bg-slate-400 w-64 justify-center rounded-2xl p-4">
        <p className="flex justify-center items-center w-40 font-bold text-4xl text-black bg-white rounded-2xl mr-3">
          {quantity}
        </p>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className={`${buttonStyle} px-4`}
        >
          +
        </button>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className={`${buttonStyle} px-5`}
        >
          -
        </button>
      </div>
    </div>
  );
}
