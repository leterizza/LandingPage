import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Poppins, Kalam, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Leterizza | Preparação acessível para o vestibular",
  description:
    "Plataforma de estudos gratuita e gamificada que democratiza o acesso ao vestibular para estudantes de todo o Brasil.",
  keywords: ["vestibular", "estudos", "gratuito", "enem", "educação"],
  openGraph: {
    title: "Leterizza | Educação Acessível",
    description:
      "Plataforma de estudos gamificada que democratiza o acesso ao vestibular.",
    url: "https://leterizza.com.br",
    siteName: "Leterizza",
    images: [
      {
        url: "/static/logoHorizontal.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${kalam.variable} ${caveat.variable} antialiased`}
      >
        {children}

        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/50515665.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
