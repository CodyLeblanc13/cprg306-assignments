<<<<<<< HEAD
import Image from "next/image";
import ItemList from "./item-list";
import Link from "next/link";

export const metadata ={
    title: "Shopping List",
}

export default function Page() {
  return (
    <main>
       <h1 className="text-center text-2xl font-semibold mb-4">Shopping List</h1>
        <ItemList />

        <Link href="/" className="text-pink-600 underline">
        Back to home 
      </Link>
    </main>
  );
}
=======
import Home from "../home";
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
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
