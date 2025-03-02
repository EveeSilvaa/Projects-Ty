import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className="bg-rasa text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <Link href={link} className="block mt-2 text-rosabb font-semibold hover:underline">
        Acessar
      </Link>
    </div>
  );
}
