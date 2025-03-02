import Header from "@/components/Header";
import Link from "next/link";

export default function Desafios() {
  const linguagens = ["typescript", "javascript", "react", "next.js", "python", "java"];

  return (
    <main className="min-h-screen bg-branco text-gray-900">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-rosabb">Desafios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {linguagens.map((linguagem) => (
            <div key={linguagem} className="p-4 border rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-semibold">{linguagem.toUpperCase()}</h2>
              <Link
                href={`/desafios/${linguagem.toLowerCase()}`}
                className="text-rosabb font-semibold hover:underline"
              >
                Iniciar Desafios
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}