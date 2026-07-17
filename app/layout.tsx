import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

function resolveMetadataBase(): URL {
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return new URL(`https://${productionHost}`);
  }
  const vercelHost = process.env.VERCEL_URL;
  if (vercelHost) {
    return new URL(`https://${vercelHost}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  title: "Alex Benson – Portfolio",
  description: "Senior Electrical Engineering Student at Colorado State University.",
  metadataBase: resolveMetadataBase(),
  openGraph: {
    title: "Alex Benson – Portfolio",
    description: "Senior Electrical Engineering Student at Colorado State University.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inconsolata.variable} antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          src="/theme-init.js"
        />
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
