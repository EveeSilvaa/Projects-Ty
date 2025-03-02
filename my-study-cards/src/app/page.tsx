import Header from "@/components/Header";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-branco text-gray-900">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-rosabb">Meus Estudos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Card title="Assuntos Estudados" description="Veja tudo que já aprendi!" link="/assuntos" />
          <Card title="Desafios" description="Resolva desafios para testar seu conhecimento!" link="/desafios" />
        </div>
      </div>
    </main>
  );
}
