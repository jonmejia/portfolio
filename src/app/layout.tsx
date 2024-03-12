import type { Metadata } from "next";
import { Domine } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const font = Domine({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Mejia",
  description: "1998-[TBD] Nerd of the Year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#436850] text-[#FBFADA]`}><Header />{children}</body>
    </html>
  );
}
