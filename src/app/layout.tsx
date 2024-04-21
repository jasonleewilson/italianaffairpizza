import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOR SALE | ItalianAffairPizza.com",
  description: "FOR SALE | ItalianAffairPizza.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-TCQMN2K4' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
