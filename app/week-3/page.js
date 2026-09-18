import Home from "../home";
import ItemList from "./item-list";
export default function page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center pt-6 pb-1 text-purple-500">
        Shopping List
      </h1>
      <ItemList />
      <Home />
    </main>
  );
}
