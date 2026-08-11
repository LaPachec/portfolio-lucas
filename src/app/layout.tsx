import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lucas Araújo | Desenvolvedor Full Stack",
    template: "%s | Lucas Araújo",
  },
  description:
    "Portfólio de Lucas Araújo, desenvolvedor Full Stack com projetos em Next.js, React, Node.js, APIs e sistemas web.",
  keywords: [
    "Lucas Araújo",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfólio",
  ],
  authors: [{ name: "Lucas Araújo" }],
  creator: "Lucas Araújo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Lucas Araújo | Desenvolvedor Full Stack",
    description:
      "Projetos web com foco em interfaces, APIs, dados e regras de negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Araújo | Desenvolvedor Full Stack",
    description:
      "Projetos web com foco em interfaces, APIs, dados e regras de negócio.",
  },
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
