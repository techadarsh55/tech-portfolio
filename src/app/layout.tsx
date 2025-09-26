import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Shortcut from "@/components/Shortcut";
import ScrollWatcher from "@/components/ScrollWatcher";

export const metadata: Metadata = {
  title: "TechAdarsh - Portfolio",
  description:"Explore the professional portfolio of Adarsh Admane, a skilled Python Fullstack Developer specializing in modern web applications, UI/UX design, and scalable backend solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <div>
          <div
            id="navbar-div" 
            className="sticky top-0 w-full lg:p-2 sm:p-3 md:p-3 z-20">
            <Navbar />
          </div>
          <div className="mt-0" id="main-container">
            {children}
          </div>
          <Shortcut />
          <Footer />
          <ScrollWatcher /> {/* run your effect here */}
        </div>
      </body>
    </html>
  );
}
