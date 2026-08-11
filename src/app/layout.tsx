import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas | Desenvolvedor Full Stack",
  description: "Portfólio profissional de Lucas, desenvolvedor Full Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
