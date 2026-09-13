import { RootProvider } from 'fumadocs-ui/provider';
import '~/styles/globals.css';
import 'fumadocs-ui/style.css';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
