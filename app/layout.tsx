import { RootProvider } from 'fumadocs-ui/provider';
import '@radix-ui/themes/styles.css';
import '~/styles/globals.css';
import 'fumadocs-ui/style.css';
import type { ReactNode } from 'react';
import { Theme } from '@radix-ui/themes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <Theme
          accentColor="amber"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          appearance="dark"
        >
          <RootProvider
            theme={{
              defaultTheme: 'dark',
              enabled: true,
            }}
          >
            {children}
          </RootProvider>
        </Theme>
      </body>
    </html>
  );
}
