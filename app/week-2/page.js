import Home from "../components/home";
import StudentInfo from "./student-info";
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        Name and GitHub link
      </h1>
      <StudentInfo />
      <Home />
    </main>
  );
}
