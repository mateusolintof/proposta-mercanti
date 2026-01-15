import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposta Comercial | Mercante Distribuidora | Convert.AI",
  description:
    "Orquestração inteligente de atendimento comercial para Mercante Distribuidora: fila inteligente, agentes especializados por jornada, governança WhatsApp e dashboard executivo.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#02040A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className="antialiased bg-background text-foreground font-sans"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
