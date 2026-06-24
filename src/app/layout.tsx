"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { toggleTheme } from "./utils";
import { useEffect } from "react";
import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Apply the initial theme
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html>
      <head>
        <title>Neil Hanak</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="max-w-7xl flex-col justify-items-center m-auto bg-canvas transition-colors ease duration-400">
        <Navbar toggleTheme={toggleTheme} />
        {/*todo NavButtonMobile and NavbarMobile */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
