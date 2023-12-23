import { FC } from "react";

import Image from 'next/image';

import {
    INSTAGRAM_URL,
    LOCATION_URL,
    PHONE_URL,
    TELEGRAM_URL,
    WHATSAPP_URL
} from "@/const";

import styles from './Contacts.module.css';

const SOCIAL_NETWORKS = [
    {
        href: INSTAGRAM_URL,
        src: '/social/instagram.svg',
        alt: 'Instagram',
    },
    {
        href: TELEGRAM_URL,
        src: '/social/tg.svg',
        alt: 'Telegram',
    },
    {
        href: WHATSAPP_URL,
        src: '/social/whatsapp.svg',
        alt: 'WhatsApp',
    },
    {
        href: PHONE_URL,
        src: '/social/phone.svg',
        alt: 'Номер телефона',
    },
];

export const Contacts: FC = () => {
    return (
        <div className={styles.Contacts}>
            <div className={styles.ContactsContent}>
                <a
                    href={LOCATION_URL}
                    className={styles.Location}
                    target="_blank"
                >
                    <Image
                        className={styles.LocationImage}
                        src="/location.svg"
                        alt="Локация"
                        width={24}
                        height={24}
                    />
                    г.Симферополь, ул. Узловая, д. 18
                </a>
                <div className={styles.SocialNetworks}>
                    {SOCIAL_NETWORKS.map(({
                        src,
                        href,
                        alt,
                    }) => (
                        <a
                            className={styles.Icon}
                            key={src}
                            href={href}
                            target="_blank"
                        >
                            <Image
                                src={src}
                                width={24}
                                height={24}
                                alt={alt}
                                title={alt}
                            />
                        </a>
                    ))}
                    <a
                        className={styles.PhoneNumber}
                        href="tel: +79785777970"
                    >
                        +7 978 5 777 970
                    </a>
                </div>
            </div>
        </div>
    );
};
