import Link from "next/link";

export default function BackHome() {
  return (
    <main>
      <Link href="/" className="hover:text-amber-400 text-amber-200">
        Return to Home
      </Link>
    </main>
  );
}
