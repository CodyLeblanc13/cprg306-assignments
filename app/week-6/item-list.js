"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const getButtonClass = (type) => {
    return sortBy === type
      ? "m-2 rounded-lg border border-teal-300/50 bg-teal-300 px-3 py-1 text-lg font-semibold text-slate-950"
      : "m-2 rounded-lg border border-indigo-300/20 bg-slate-800 px-3 py-1 text-lg text-slate-200 transition hover:border-teal-300/50 hover:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300";
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-md text-slate-300">Sort By: </span>
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
