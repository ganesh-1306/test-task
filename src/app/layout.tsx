import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hanken_Grotesk } from 'next/font/google';
import "./globals.css";


const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});



export const metadata: Metadata = {
  title: "Codesauna",
  description: "Codesauna Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={hankenGrotesk.className}
      >
        {children}
      </body>
    </html>
  );
}
