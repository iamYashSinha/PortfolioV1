import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Sinha | Software Engineer",
  description: "Software Engineer specializing in Java, Spring Boot, Node.js, GraphQL, and REST APIs.",
  icons: {
    icon: [
      {
        url: '/assets/profile.jpg',
        sizes: '32x32',
        type: 'image/jpeg',
      },
      {
        url: '/assets/profile.jpg',
        sizes: '16x16',
        type: 'image/jpeg',
      }
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
