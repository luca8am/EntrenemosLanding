import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/marketing/site-config";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const siteUrl = siteConfig.url;
const title = siteConfig.name;
const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${title}`,
  },
  description,
  applicationName: title,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: title,
    title: siteConfig.title,
    description,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Entrenemos: entrenamiento y progreso compartido entre atletas y entrenadores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description,
    images: [siteConfig.socialImage],
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
    <html lang="es-AR" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
