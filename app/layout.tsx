import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

import { cn } from "../lib/utils";
import AppBar from "@/components/shared/AppBar";

// Removed the fontSans export

export const metadata: Metadata = {
  title: "Wassieverse App",
  description: "Wassieverse NFT Bridge App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Adjusted to remove the reference to fontSans.variable
  return (
    <html lang="en">
      <body className={cn("w-full h-full")}>
        <Providers>
          <div className="w-full h-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
