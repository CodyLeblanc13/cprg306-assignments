<<<<<<< HEAD
import Image from "next/image";
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
        <h1>Shopping List</h1>
        <StudentInfo />
=======
import Home from "../home";
import StudentInfo from "./student-info";
export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo/>
      <Home/>
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
    </main>
  );
}
