import NewItem from "./new-item";
import Home from "../components/home";
export default function page() {
  return (
    <main className="mx-auto max-w-3xl p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        Interactivity with Forms
      </h1>
      <NewItem />
      <Home />
    </main>
  );
}
