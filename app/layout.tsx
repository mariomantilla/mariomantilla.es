import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mariomantilla.es'),
  title: "Mario Mantilla - Software Engineer and Social Impact",
  description: "The personal website of Mario Mantilla, software engineering and social impact",
  alternates: {
    canonical: './',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
