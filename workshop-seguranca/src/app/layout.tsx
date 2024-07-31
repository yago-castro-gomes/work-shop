import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local' ;

const GoodTiming = localFont({
  src: '../../public/fonts/GoodTiming-Bold.otf',
  variable: '--font-surt-bold',
})

export const metadata: Metadata = {
  title: "WorkShop",
  description: "Convite para evento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GoodTiming.className}>{children}</body>
    </html>
  );
}
