"use client"; 
import Header from "@/components/Header";
import FlashcardDesafio from "@/components/FlashcardDesafio";
import { notFound } from "next/navigation";
import desafiosData from "@/data1/desafios.json"; 
import { useState } from "react";

export default function DesafioPage({ params }: { params: { linguagem: string } }) {
  const { linguagem } = params;

  // Verifica se a linguagem existe nos dados
  const desafios = desafiosData[linguagem as keyof typeof desafiosData];
  console.log(desafios); // Depuração: Verifique os dados carregados

  if (!desafios) {
    return notFound(); // Retorna 404 se a linguagem não existir
  }

  const [indiceDesafio, setIndiceDesafio] = useState<number>(0);

  const proximoDesafio = () => {
    if (indiceDesafio < desafios.length - 1) {
      setIndiceDesafio(indiceDesafio + 1);
    } else {
      alert("Você completou todos os desafios!");
    }
  };

  return (
    <main className="min-h-screen bg-branco text-gray-900">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-rosabb mb-8">
          Desafios de {linguagem.toUpperCase()}
        </h1>
        <div className="max-w-lg mx-auto">
          <FlashcardDesafio
            pergunta={desafios[indiceDesafio].pergunta}
            resposta={desafios[indiceDesafio].resposta}
            opcoes={desafios[indiceDesafio].opcoes}
            onProximo={proximoDesafio}
          />
        </div>
      </div>
    </main>
  );
}