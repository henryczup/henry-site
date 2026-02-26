import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Czupryna",
  description: "Projects and writeups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <header className="mb-10 flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h1 className="text-lg font-semibold tracking-tight">Henry Czupryna</h1>
              <nav className="text-sm text-zinc-400">
                <a className="hover:text-zinc-200" href="/">Projects</a>
                <span className="mx-2">·</span>
                <a className="hover:text-zinc-200" href="/writeups">Writeups</a>
              </nav>
            </div>
            <div className="text-sm text-zinc-400">
              <a className="hover:text-zinc-200" href="mailto:henryczup@gmail.com">henryczup@gmail.com</a>
              <span className="mx-2">·</span>
              <a className="hover:text-zinc-200" href="https://www.linkedin.com/in/henry-czupryna-2b3044250/" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="mx-2">·</span>
              <a className="hover:text-zinc-200" href="https://github.com/henryczup" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </header>

          {children}

          <footer className="mt-14 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
            <div>Madison, WI · U.S. Citizen</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
