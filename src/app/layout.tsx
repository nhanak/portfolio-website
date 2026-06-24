"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Neil Hanak</title>
        <link rel="icon" href="/favicon.ico" />
        <script>
          {`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
          `}
        </script>
      </head>

      <body className="max-w-7xl flex-col justify-items-center m-auto">
        <Navbar isDarkMode={true} toggleTheme={() => {}} />
        {/*todo NavButtonMobile and NavbarMobile */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
