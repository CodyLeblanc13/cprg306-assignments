import Link from "next/link";

export default function BackHome() {
  return (
    <main className="m-4">
      <Link href="/" className="hover:text-amber-400 text-amber-200">
        Return to Home
      </Link>
    </main>
  );
}
