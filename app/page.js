import Link from "next/link";
export default function Page() {
  const WeekLinks = [
    { week: 2, description: "My name and github link" },
    { week: 3, description: "Styled Shopping List" },
    { week: 4, description: "Basic Interactive Component" },
    { week: 5, description: "Interactivity with Forms" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-purple-600">
        CPRG306 Assignments
      </h1>
      <p className="pb-4">
        Click one of the following links to view my web dev 2 weekly assignment!
      </p>
      {WeekLinks.map((link) => (
        <div key={link.week} className="mb-2">
          <Link
            href={`/week-${link.week}`}
            className="text-underline text-blue-500 hover:"
          >
            Go to Week {link.week}
          </Link>
          <p className="text-white">{link.description}</p>
        </div>
      ))}
    </main>
  );
}
