import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './globals.css';

const OpenSans = Open_Sans({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Montana Detailing',
    description: 'Детейлинг-центр в Симферополе',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html
            lang="ru"
            className={OpenSans.className}
        >
            <head>
                <script
                    async
                    src="https://smtpjs.com/v3/smtp.js"
                />
                <meta
                    name="yandex-verification"
                    content="f808775a0f3d84c7"
                />
                <meta
                    name="yandex-verification"
                    content="98f5a2bb044e9c6e"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=0"
                />
            </head>
            <body>
                <Contacts />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
