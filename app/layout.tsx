import Header from '@/components/layout/Header';
import AfterHydrationHandler from '@/components/shared/AfterHydrationHandler';
import type { Metadata } from 'next';
import { Finger_Paint, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const fingerpaint = Finger_Paint({
  variable: '--font-fingerpaint',
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

const mechepro = localFont({
  variable: '--font-mechepro',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/mechepro-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/mechepro-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mechepro-light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Lukas Hoppe',
  description:
    'Hey, I am Lukas. Nice to meet you. I build products and software. Have fun exploring.',
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
        <main
          className="flex flex-col items-stretch justify-start"
          style={{ height: '100dvh' }}
        >
          <AfterHydrationHandler />
          <div className="relative z-40">
            <Header />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
