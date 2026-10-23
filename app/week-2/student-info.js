import Link from "next/link";

export default function StudentInfo() {
  return (
    <main className="my-6 rounded-xl border border-indigo-300/15 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20">
      <h1 className="text-2xl font-semibold text-teal-200">Cody Leblanc</h1>
      <Link
        href="https://github.com/CodyLeblanc13/cprg306-assignments"
        className="mt-3 inline-block font-medium text-teal-300 underline-offset-4 hover:text-teal-100 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
      >
        GitHub repo link
      </Link>
    </main>
  );
}
