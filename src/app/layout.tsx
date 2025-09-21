import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechAdarsh Portfolio",
  description: "adarsh admane's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
        >
        <div className="">
          <div className="sticky top-2 w-full lg:p-3 sm:p-3 md:p-3 bg-transparent z-11">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
