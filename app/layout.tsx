import Header from '@/components/Header';
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
    "Hey, it's Lukas. Nice to meet you. I like building digital products and this website is the place where I share all my creations. Have fun exploring them.",
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
          <div className="relative z-40">
            <Header />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
