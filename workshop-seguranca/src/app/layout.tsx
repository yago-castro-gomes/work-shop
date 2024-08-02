import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local' ;
import { Suspense } from "react";
import RouteLoader from "./loading";

const GoodTiming = localFont({
  src: '../../public/fonts/GoodTiming-Bold.otf',
  variable: '--font-surt-bold',
})

export const metadata: Metadata = {
  title: "Workshop Segurança",
  description: "Convite para evento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<RouteLoader />}>
        <body className={GoodTiming.className}>{children}</body>
      </Suspense>
    </html>
  );
}
