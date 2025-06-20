import type { Metadata } from "next";
import { Yellowtail } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail"
})

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
    <html lang="en" className="">
      <body
        className={`font-neue antialiased bg-[#101010]`}
      >
        {children}
      </body>
    </html>
  );
}
