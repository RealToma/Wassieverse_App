import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

import { cn } from "../lib/utils";
import AppBar from "@/components/shared/AppBar";
import { Toaster } from "react-hot-toast";
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
          <Toaster
            position="top-right"
            reverseOrder={true}
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "white",
                  secondary: "#00cfff",
                },
                style: {
                  background: "#00cfff",
                  borderRadius: "10px",
                  color: "white",
                  fontFamily: "Gochi Hand",
                  fontSize: "20px",
                  fontWeight: "400",
                },
              },
              error: {
                iconTheme: {
                  primary: "white",
                  secondary: "#e9c730",
                },
                style: {
                  background: "#e9c730",
                  borderRadius: "10px",
                  color: "white",
                  fontFamily: "Gochi Hand",
                  fontSize: "20px",
                  fontWeight: "400",
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
