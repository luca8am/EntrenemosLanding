import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.entrenemos.app";
const title = "Entrenemos";
const description =
  "Planificá, entrená y seguí el progreso con una experiencia conectada para atletas y entrenadores.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/brand/logo-primary.png",
        width: 1200,
        height: 1200,
        alt: "Logo de Entrenemos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/logo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
