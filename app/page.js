import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">cprg306-assignments</h1>
      <p>Click one of the following links</p>
      <Link href="/week-2" className="text-underline text-blue-500">
        Go to Week 2
      </Link>
    </main>
  );
}
