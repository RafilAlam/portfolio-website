import type { Metadata } from "next";
import { neueMontreal } from "./neue-montreal";
import { Yellowtail } from "next/font/google";
import { Gloock } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock"
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail"
});

export const metadata: Metadata = {
  title: "Rafil's Portfolio",
  description: "Created with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${gloock.variable} ${yellowtail.variable}`}>
      <body className="font-neue antialiased bg-[#101010]">
        {children}
      </body>
    </html>
  );
}
