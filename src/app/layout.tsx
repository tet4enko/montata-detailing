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
                <></>
            </head>
            <body>
                <Contacts />
                <Header />
                {children}
                <Footer />
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<!-- Yandex.Metrika counter -->
                        <script type="text/javascript" >
                           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                           m[i].l=1*new Date();
                           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                        
                           ym(96052561, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true
                           });
                        </script>
                        <noscript><div><img src="https://mc.yandex.ru/watch/96052561" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                        <!-- /Yandex.Metrika counter -->`
                    }}
                />
            </body>
        </html>
    );
}
