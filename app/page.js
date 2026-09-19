<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-semibold">CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2" className="text-pink-600 underline">
        Go to Week 2 Assignment 
      </Link>
      <br></br>
      <Link href="/week-3" className="text-pink-600 underline">
        Go to Week 3 Assignment 
      </Link>
=======
import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-purple-600 text-center p-4">cprg306-assignments</h1>
      <p className="text-center pb-4">Click one of the following links to view the weekly assignment</p>
      <section className="text-center">
      <Link href="/week-2" className="text-underline text-blue-500">
        Go to Week 2
        <p className="text-white ">My name and github link</p>
      </Link>
      <br></br>
      <Link href="/week-3" className="text-underline text-blue-500">
        Go to Week 3
        <p className="text-white">Styled Shopping List</p>
      </Link>
      </section>
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
    </main>
  );
}
