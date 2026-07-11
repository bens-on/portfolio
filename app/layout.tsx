import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import AuroraBackground from "@/components/AuroraBackground";

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

export const metadata: Metadata = {
  title: "Alex Benson – Portfolio",
  description:
    "MSEE student at Colorado State University focused on embedded systems, AI, and RF/aerospace engineering.",
  metadataBase: new URL("https://www.benson.engineer"),
  openGraph: {
    title: "Alex Benson – Portfolio",
    description:
      "MSEE student at Colorado State University focused on embedded systems, AI, and RF/aerospace engineering.",
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
        className={`${spaceGrotesk.variable} ${inconsolata.variable} antialiased relative min-h-screen`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          src="/theme-init.js"
        />
        <AuroraBackground />
        <Header />
        <div className="relative z-10">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
