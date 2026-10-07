"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added: ${name} (Quantity: ${quantity}, Category: ${category})`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const categoryList = [
    { label: "Produce", value: "produce" },
    { label: "Dairy", value: "dairy" },
    { label: "Bakery", value: "bakery" },
    { label: "Meat", value: "meat" },
    { label: "Frozen Foods", value: "frozen foods" },
    { label: "Canned Goods", value: "canned goods" },
    { label: "Dry Goods", value: "dry goods" },
    { label: "Beverages", value: "beverages" },
    { label: "Snacks", value: "snacks" },
    { label: "Household", value: "household" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="flex justify-center p-4 pt-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Add New Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Item Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Item Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="e.g., Milk, Apples, Bread"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Quantity & Category Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Quantity Stepper */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center justify-between bg-slate-100 border border-slate-300 rounded-xl p-1.5">
                <button
                  type="button"
                  onClick={decrement}
                  disabled={quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-slate-700 font-bold text-xl shadow-sm hover:bg-slate-50 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100"
                >
                  -
                </button>
                <span className="text-xl font-bold text-slate-800">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={increment}
                  disabled={quantity >= 20}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-slate-700 font-bold text-xl shadow-sm hover:bg-slate-50 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:active:scale-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Category Dropdown */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                className="w-full h-[52px] px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition capitalize"
              >
                {categoryList.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}