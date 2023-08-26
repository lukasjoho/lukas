import Header from '@/components/layout/Header';
import AfterHydrationHandler from '@/components/shared/AfterHydrationHandler';
import content from '@/lib/content';
import { fingerpaint, inter, mechepro } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: content.general.title,
  description: content.general.description,
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mechepro.variable} ${fingerpaint.variable} text-dark`}
      >
        <main className="flex flex-col" style={{ height: '100dvh' }}>
          <AfterHydrationHandler />
          <Header />
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
