// app/layout.js
import * as React from 'react';
import Head from 'next/head';
import ThemeProvider from '../src/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
