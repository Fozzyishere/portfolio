import React from "react";
import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRandomizer from "@/components/ThemeRandomizer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quoc's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRandomizer />
        {children}
      </body>
    </html>
  );
}
