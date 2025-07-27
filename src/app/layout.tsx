import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";
import "./mdx-styles.css";
import NavBar from "@/components/NavBar";
import { SmoothScrolling } from "@/components/SmoothScroll";

const antonio = Antonio({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DigiPlus IT - Telecom & Analytics Solutions",
  description: "DigiPlus IT empowers industries with OSS/BSS, cloud-native solutions, and Agile delivery—driving impact through data and AI governance.",
  keywords: "telecom, analytics, OSS, BSS, AI, cloud-native, data governance, digital transformation",
  authors: [{ name: "DigiPlus IT" }],
  creator: "DigiPlus IT",
  publisher: "DigiPlus IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://digiplus-it.com'),
  openGraph: {
    title: "DigiPlus IT - Telecom & Analytics Solutions",
    description: "Empowering industries with OSS/BSS, cloud-native solutions, and Agile delivery—driving impact through data and AI governance.",
    url: 'https://digiplus-it.com',
    siteName: 'DigiPlus IT',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DigiPlus IT - Telecom & Analytics Solutions",
    description: "Empowering industries with OSS/BSS, cloud-native solutions, and Agile delivery—driving impact through data and AI governance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonio.className} antialiased`}>
        <main className="max-w-full mx-auto">
          <NavBar />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </main>
      </body>
    </html>
  );
}
