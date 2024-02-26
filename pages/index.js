import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Investment Quiz App</h1>
      <Link href="/quiz">Start quiz</Link>
    </main>
  );
}
