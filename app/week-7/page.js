"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import BackHome from "../components/backhome";

import { useState } from "react";

// export const metadata = {
//   title: "Shopping List",
// };

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col items-center">
      <title>Shopping List</title>
      <div className="w-full max-w-md space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-amber-500 tracking-tight">
            Shopping List
          </h1>
        </header>

        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>

        <div className="flex justify-center pt-2">
          <BackHome />
        </div>
      </div>
    </main>
  );
}