import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";
import { ThemeProvider } from "./provider";

// Dynamically import browser-specific components with SSR disabled
const MouseTracker = dynamic(() => import("@/components/MouseTracker"), {
  ssr: false,
});
const ParticleTrail = dynamic(() => import("@/components/ParticleTrail"), {
  ssr: false,
});

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
