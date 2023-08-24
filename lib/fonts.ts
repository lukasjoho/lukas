import { Finger_Paint, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const fingerpaint = Finger_Paint({
  variable: '--font-fingerpaint',
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export const mechepro = localFont({
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
