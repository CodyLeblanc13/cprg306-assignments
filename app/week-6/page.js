import Home from "../components/home";
import ItemList from "./item-list";
export default function page() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="flex justify-center text-4xl font-bold tracking-tight text-white">Shopping List</h1>
      <ItemList />
      <Home />
    </main>
  );
}
