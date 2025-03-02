"use client"; // Adicionar esta linha para usar hooks
import { useState } from "react";

interface FlashcardDesafioProps {
  pergunta: string;
  resposta: string;
  opcoes: string[];
  onProximo: () => void;
}

export default function FlashcardDesafio({ pergunta, resposta, opcoes, onProximo }: FlashcardDesafioProps) {
  const [respostaUsuario, setRespostaUsuario] = useState<string | null>(null);
  const [mostrarResposta, setMostrarResposta] = useState<boolean>(false);

  const verificarResposta = (opcao: string) => {
    setRespostaUsuario(opcao);
    setMostrarResposta(true);

    // Remove espaços em branco e converte para minúsculas
    const respostaUsuarioFormatada = opcao.trim().toLowerCase();
    const respostaCorretaFormatada = resposta.trim().toLowerCase();

    // Verifica se a resposta do usuário está correta
    if (respostaUsuarioFormatada === respostaCorretaFormatada) {
      console.log("🎉 Resposta correta!");
    } else {
      console.log("❌ Resposta incorreta!");
    }
  };

  const proximoDesafio = () => {
    setRespostaUsuario(null);
    setMostrarResposta(false);
    onProximo();
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">{pergunta}</h2>
      <div className="space-y-2">
        {opcoes.map((opcao, index) => (
          <button
            key={index}
            className={`w-full p-2 border rounded-lg text-left ${
              respostaUsuario === opcao
                ? opcao.trim().toLowerCase() === resposta.trim().toLowerCase()
                  ? "bg-green-200"
                  : "bg-red-200"
                : "hover:bg-gray-100"
            }`}
            onClick={() => verificarResposta(opcao)}
            disabled={mostrarResposta}
          >
            {opcao}
          </button>
        ))}
      </div>
      {mostrarResposta && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">
            {respostaUsuario?.trim().toLowerCase() === resposta.trim().toLowerCase()
              ? "🎉 Correto!"
              : "❌ Incorreto!"}
          </p>
          <button
            className="mt-2 px-4 py-2 bg-rosabb text-white rounded-lg hover:bg-rosabb-dark"
            onClick={proximoDesafio}
          >
            Próximo Desafio
          </button>
        </div>
      )}
    </div>
  );
}