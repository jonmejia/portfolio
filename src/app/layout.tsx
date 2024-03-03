import type { Metadata } from "next";
import { Domine } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const font = Domine({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}><Header />{children}</body>
    </html>
  );
}
