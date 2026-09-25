import Link from "next/link";
export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-purple-600">CPRG306 Assignments</h1>
      <p className="pb-4">Click one of the following links to view the weekly assignment</p>
      <section>
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
    </main>
  );
}
