"use client";

import { ViewTransition, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./styles.css";
import NavbarMobile from "../components/navbarMobile/NavbarMobile";
import NavButtonMobile from "../components/navButtonMobile/NavButtonMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const themeScript = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

  const [mobileNavbarIsOpen, setMobileNavbarOpen] = useState(false);

  const mobileRef = useRef<any>(null);

  return (
    <html suppressHydrationWarning>
      <head>
        <title>Neil Hanak</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body className="max-w-6xl flex-col justify-items-center m-auto bg-canvas transition-colors ease-in-out duration-400 overflow-y-scroll">
        <Navbar />
        <NavbarMobile
          ref={mobileRef}
          mobileNavbarIsOpen={mobileNavbarIsOpen}
          setMobileNavbarOpen={setMobileNavbarOpen}
        />
        <NavButtonMobile
          navRef={mobileRef}
          mobileNavbarIsOpen={mobileNavbarIsOpen}
          setMobileNavbarOpen={setMobileNavbarOpen}
        />
        <ViewTransition exit="slide-down" enter="slide-up">
          {children}
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
