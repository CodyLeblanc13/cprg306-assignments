"use client";
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Home from "../components/home";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="flex justify-center text-4xl font-bold tracking-tight text-white">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Home />
    </main>
  );
}
