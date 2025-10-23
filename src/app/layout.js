import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Meog: the metablog which grows with you.",
    template: "%s | Meog: the metablog which grows with you."
  },
  description: "Discover posts about coding, ideas, and the journey of building this metablog step by step. Meog is always growing and improving every week while you will learn what's behind a website and the technical process.",
  authors: [{ name: "Michael Primo" }],
  creator: "Michael Primo",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://meog.it",
    siteName: "Meog",
    title: "Meog: the metablog which grows with you.",
    description: "Discover posts about coding, ideas, and the journey of building this metablog step by step. Meog is always growing and improving every week while you will learn what's behind a website and the technical process.",
    images: [
      {
        url: "/meog_logo_metatag.webp",
        width: 1200,
        height: 630,
        alt: "Immagine preview del sito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
   title: "Meog: the metablog which grows with you.",
    description: "Discover posts about coding, ideas, and the journey of building this metablog step by step. Meog is always growing and improving every week while you will learn what's behind a website and the technical process.",
    images: ["/meog_logo_metatag.webp"],
    creator: "@MeogDev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:mx-[10%] lg:mx-[20%] sm:mx-[5%] mx-2 `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
