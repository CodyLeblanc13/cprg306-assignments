import Link from "next/link";

export default function Home() {
    return(
        <main>
            <h1 className="text-red-600 text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
            <Link className="text-underline text-blue-700" href="/week-2">Week 2</Link>
        </main>
    )
}