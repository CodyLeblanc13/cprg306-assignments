<<<<<<< HEAD
// student-info.js
export default function StudentInfo() {
  return (
    <div className="student-info">
      <h2>Alyssa DaCosta</h2>
      <a className="text-pink-600 underline"
        href="https://github.com/grimoiresandgithb" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View my GitHub Repository
      </a>
    </div>
=======
import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h1>Cody Leblanc</h1>
      <Link href="https://github.com/CodyLeblanc13/cprg306-assignments" className="text-blue-500 text-underline">GitHub repo link</Link>
    </main>
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
  );
}
