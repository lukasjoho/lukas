import Header from '@/components/layout/Header';
import OnMount from '@/components/shared/OnMount';
import Segment from '@/lib/clients/segment';
import content from '@/lib/content';
import { fingerpaint, inter, mackinac, mechepro } from '@/lib/fonts';
import { Analytics } from '@vercel/analytics/react';
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
    <>
      <html lang="en">
        {/* @ts-ignore window.analytics undefined below */}

        <body
          className={`${inter.className} ${mechepro.variable} ${fingerpaint.variable} ${mackinac.variable} text-dark`}
        >
          <main className="flex flex-col" style={{ height: '100dvh' }}>
            <Segment />
            <Header />
            {children}
            {modal}
            <Analytics />
          </main>
          <OnMount />
        </body>
      </html>
    </>
  );
}
