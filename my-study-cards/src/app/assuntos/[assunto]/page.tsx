import Header from "@/components/Header";
import Flashcard from "@/components/Flashcard";
import { notFound } from "next/navigation";
import flashcardsData from "@/data/flashcards.json";

export default function FlashcardPage({ params }: { params: { assunto: string } }) {
  const { assunto } = params;

  // Verifica se o assunto existe nos dados
  const flashcards = flashcardsData[assunto as keyof typeof flashcardsData];
  if (!flashcards) {
    return notFound(); // Retorna 404 se o assunto não existir
  }

  return (
    <main className="min-h-screen bg-branco text-gray-900">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-rosabb mb-8">
          Flashcards de {assunto.toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map((flashcard, index) => (
            <Flashcard
              key={index}
              pergunta={flashcard.pergunta}
              resposta={flashcard.resposta}
            />
          ))}
        </div>
      </div>
    </main>
  );
}