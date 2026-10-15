import Link from "next/link";

export default function Home() {
  return (
    <Link href="/" className="text-blue-500 flex justify-center p-4 hover:underline hover:text-blue-700">
      Return to Home Page
    </Link>
  );
}
