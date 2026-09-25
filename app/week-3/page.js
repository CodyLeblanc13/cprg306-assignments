import Home from "../home-folder/home";
import ItemList from "./item-list";
export default function page() {
  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="text-4xl font-bold text-purple-500">
        Shopping List
      </h1>
      <ItemList />
      <Home />
    </main>
  );
}
