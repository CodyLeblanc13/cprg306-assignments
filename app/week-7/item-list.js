"use client";
import Item from "./item";
import { useState } from "react";


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const getButtonClass = (type) => {
    return sortBy === type
      ? "bg-purple-600 p-1 m-2 rounded text-lg border border-slate-900"
      : "bg-slate-500 p-1 m-2 rounded text-lg hover:bg-slate-700 border-slate-500 hover:border-slate-300";
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-md text-slate-400">Sort By: </span>
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={getButtonClass("name")}
        >
          Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={getButtonClass("category")}
        >
          Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
