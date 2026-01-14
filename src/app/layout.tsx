import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- ESTO ES LA CLAVE PARA QUE SE VEA BIEN

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Choice Club | Villa Nueva",
  description: "Experiencia Visual y Reservas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}