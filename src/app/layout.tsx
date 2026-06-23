import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
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
        {children}
      </body>
    </html>
  );
}
