import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teknovia.in"),

  title: {
    default: "Software Development & Digital Marketing Company | Teknovia",
    template: "%s | Teknovia Technologies",
  },

  description:
    "Teknovia Technologies is a software development and digital marketing company offering custom software, web and mobile applications, SaaS, eCommerce, EdTech, SEO and digital marketing solutions.",

  keywords: [
    "software development company",
    "software development company in Noida",
    "software development company in Delhi NCR",
    "custom software development",
    "web development company",
    "mobile app development company",
    "SaaS development company",
    "eCommerce development company",
    "digital marketing company",
    "SEO company in Noida",
    "EdTech solutions",
    "IoT development company",
  ],

  authors: [
    {
      name: "Teknovia Technologies",
      url: "https://www.teknovia.in",
    },
  ],

  creator: "Teknovia Technologies",
  publisher: "Teknovia Technologies",

  alternates: {
    canonical: "https://www.teknovia.in/",
  },

  openGraph: {
    title: "Software Development & Digital Marketing Company | Teknovia",
    description:
      "Custom software, web and mobile applications, SaaS, eCommerce, EdTech, SEO and digital marketing solutions for modern businesses.",
    url: "https://www.teknovia.in/",
    siteName: "Teknovia Technologies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies - Software and Digital Solutions",
      },
    ],
  },

  icons: {
    icon: "/icon.ico",
  },

  robots: {
    index: true,
    follow: true,
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
        <Header />

        {children}

        {GA_ID && (
          <>
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>

            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
          </>
        )}

        <Footer />
      </body>
    </html>
  );
}
