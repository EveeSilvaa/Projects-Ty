import "../styles/global.css";

export const metadata = {
  title: "My Study Cards",
  description: "Organize seus estudos e desafios!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
