import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./banner/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marine Fish Aquarium",
  description: "Live Marine/Tropical Fish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner/>
      {children}
      </body>
    </html>
  );
}

