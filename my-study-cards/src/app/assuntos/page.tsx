import Header from "@/components/Header";
import Link from "next/link";

export default function Assuntos() {
  const estudos = ["TypeScript", "JavaScript", "React", "Next.js", "Python", "Java"];
  return (
    <main className="min-h-screen bg-branco text-gray-900">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-rosabb">Assuntos Estudados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {estudos.map((estudo) => (
            <div key={estudo} className="p-4 border rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-semibold">{estudo}</h2>
              <Link href={`/assuntos/${estudo.toLowerCase()}`} className="text-rosabb font-semibold hover:underline">
                Acessar Flashcards
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}