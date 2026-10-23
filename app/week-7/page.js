"use client";
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Home from "../components/home";

export default function page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="flex justify-center text-4xl font-bold text-purple-500">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Home />
    </main>
  );
}
