import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import MouseTracker from "@/components/MouseTracker";
import ParticleTrail from "@/components/ParticleTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sibongamandla's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Mouse animation components */}
          <MouseTracker />
          <ParticleTrail />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
