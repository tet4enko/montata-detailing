import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './globals.css';

const OpenSans = Open_Sans({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
    title: 'Montana Detailing – Детейлинг-центр в Симферополе',
    description: 'Welcome to Next.js',
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
