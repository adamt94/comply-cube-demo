import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { AppProvider } from "./provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComplyCube",
  description: "ComplyCube Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();


  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <head>

        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link
          rel="stylesheet"
          href="https://assets.complycube.com/web-sdk/v1/style.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <HydrationBoundary state={dehydratedState}>
            <Script
              src="https://assets.complycube.com/web-sdk/v1/complycube.min.js" strategy="lazyOnload"
            />
            {children}
          </HydrationBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
