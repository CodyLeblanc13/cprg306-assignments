"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((currentItems) => [...currentItems, item]);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-amber-400">Shopping List</h1>
        <div className="mt-6">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <ItemList items={items} />
      </div>
    </main>
  );
}
