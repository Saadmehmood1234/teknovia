import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teknovia Technologies Pvt Ltd",
  description:
    "Technology, software, digital growth, eCommerce and EduTech solutions for modern businesses.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}