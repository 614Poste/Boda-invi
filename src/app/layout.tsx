import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/*
  ─────────────────────────────────────────────────────────────
  👉 CÓMO CAMBIAR LA FUENTE (este es el ÚNICO lugar)
  1. Cambia `Great_Vibes` en el import de arriba por otra fuente de
     Google Fonts, escribiendo los espacios como guion bajo:
        "Dancing Script"   -> Dancing_Script
        "Playfair Display" -> Playfair_Display
  2. Cambia el mismo nombre en `const fuente = ...(` de abajo.
  3. Si la fuente tiene varios grosores, ajusta o quita `weight`
     (ej. weight: ["400", "700"]).
  NO necesitas tocar el CSS: todo usa la variable --font-boda.

  Cursivas elegantes: Dancing_Script, Parisienne, Sacramento, Allura, Tangerine
  No cursivas (serif): Playfair_Display, Cormorant_Garamond, EB_Garamond
  ─────────────────────────────────────────────────────────────
*/
const fuente = Great_Vibes({
  variable: "--font-boda",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invitación",
  description: "Nuestra Boda",
  openGraph: {
    title: "Nuestra Boda",
    description: "Kimberly",
    images: [
      {
        url: "https://www.invitame.com/Titulos/4.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fuente.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
