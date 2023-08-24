import Header from '@/components/layout/Header';
import AfterHydrationHandler from '@/components/shared/AfterHydrationHandler';
import { fingerpaint, inter, mechepro } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lukas Hoppe',
  description:
    'Hey, I am Lukas. Nice to meet you. I build products and software. Have fun exploring my projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        </main>
      </body>
    </html>
  );
}
