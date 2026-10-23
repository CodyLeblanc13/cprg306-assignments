import Link from "next/link";

export default function Home() {
  return (
    <Link
      href="/"
      className="flex justify-center p-4 font-medium text-teal-300 underline-offset-4 hover:text-teal-100 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
    >
      Return to Home Page
    </Link>
  );
}
