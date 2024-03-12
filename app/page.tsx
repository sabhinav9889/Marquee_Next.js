import Image from "next/image";
import NavBar from "./components/runningBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <NavBar/>
    </main>
  );
}