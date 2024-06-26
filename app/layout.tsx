import type { Metadata } from "next";
import React from "react";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "../lib/utils";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export const metadata: Metadata = {
  title: "Ascaorigin",
  description: "Concept Design Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body    
      className={cn(
          "min-h-screen bg-background font-sans antialiased bg-black",
          fontSans.variable
        )}
        >{children}</body>
    </html>
  );
}
