import NewItem from "./new-item";
import Home from "../components/home";
export default function page() {
  return (
    <main className="text-center m-6">
      <h1 className="text-4xl font-bold text-purple-500">
        Basic Interactive Component
      </h1>
      <NewItem />
      <Home />
    </main>
  );
}
