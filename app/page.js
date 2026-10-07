import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <h1 className="text-2xl font-bold text-amber-500">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      {weeks.map((week) => (
        <div key={week}>
          <Link href={`week-${week}`} className="text-xl">
            Week {week} Assignment
          </Link>
        </div>
      ))}
    </main>
  );
}
