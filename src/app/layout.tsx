import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Script id="custom-inline-script" strategy="beforeInteractive">
        {`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
          `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
