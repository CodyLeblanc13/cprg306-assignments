import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-purple-600 text-center p-4">cprg306-assignments</h1>
      <p className="text-center pb-4">Click one of the following links to view the weekly assignment</p>
      <section className="text-center">
      <Link href="/week-2" className="text-underline text-blue-500">
        Go to Week 2
      </Link>
      <br></br>
      <Link href="/week-3" className="text-underline text-blue-500">
        Go to Week 3
      </Link>
      </section>
    </main>
  );
}
