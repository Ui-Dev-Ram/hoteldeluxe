import "./globals.css";
import { Outfit } from 'next/font/google';
import Header from "./components/header";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '400', '700', '900'],
});

export const metadata = {
  title: "Best Hotels in India | HotelDeluxe",
  description: "Explore top-rated hotels in India with reviews, prices, and detailed pages.",
  keywords: ["hotels", "India hotels", "resorts", "travel booking"],
  authors: [{ name: "Ram Kumar", url: "https://yourdomain.com" }],
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "HotelFinder - Explore the Best Hotels in India",
    description: "Browse and book hotels with real ratings, images, and reviews.",
    url: "https://yourdomain.com",
    siteName: "HotelFinder",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HotelDeluxe – Book Best Hotels in India",
    description: "Explore, compare, and book hotels in Jaipur, Goa, Manali, and more.",
    creator: "@yourhandle",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          <Header />
          {children}
      </body>
    </html>
  );
}
