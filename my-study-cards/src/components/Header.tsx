import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-rosabb text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Study Cards</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/assuntos" className="hover:underline">Assuntos</Link></li>
            <li><Link href="/desafios" className="hover:underline">Desafios</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
