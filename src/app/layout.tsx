import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GT Powerwash | Professional Pressure Washing",
    template: "%s | GT Powerwash",
  },
  description:
    "GT Powerwash provides professional residential and commercial pressure washing services. Get a free quote today.",
  keywords: [
    "pressure washing",
    "power washing",
    "residential cleaning",
    "commercial cleaning",
    "driveway cleaning",
    "house washing",
  ],
  openGraph: {
    type: "website",
    siteName: "GT Powerwash",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
