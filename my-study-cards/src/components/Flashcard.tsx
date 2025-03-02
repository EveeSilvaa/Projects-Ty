"use client"; // Necessário para usar hooks e interatividade
import { useState } from "react";

interface FlashcardProps {
  pergunta: string;
  resposta: string;
}

export default function Flashcard({ pergunta, resposta }: FlashcardProps) {
  const [virado, setVirado] = useState(false);

  return (
    <div
      className="p-6 border rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 bg-white"
      onClick={() => setVirado(!virado)}
    >
      <div className={`${virado ? "rotate-y-180" : ""} transition-transform duration-300`}>
        <h2 className="text-xl font-semibold text-center">
          {virado ? resposta : pergunta}
        </h2>
      </div>
    </div>
  );
}