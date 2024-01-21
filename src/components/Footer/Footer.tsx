import { FC } from "react";

import cn from 'classnames';
import Image from 'next/image';

import {
    EMAIL,
    INSTAGRAM_URL,
    PHONE_URL,
    TELEGRAM_URL,
    WHATSAPP_URL
} from "@/const";
import { Platform } from "@/types";

import styles from './Footer.module.css';

const SOCIAL_NETWORKS = [
    {
        href: PHONE_URL,
        src: '/social/phonetif.svg',
        alt: 'Номер телефона',
    },
    {
        href: WHATSAPP_URL,
        src: '/social/whatsapptif.svg',
        alt: 'WhatsApp',
    },
    {
        href: TELEGRAM_URL,
        src: '/social/tgtif.svg',
        alt: 'Telegram',
    },
    {
        href: INSTAGRAM_URL,
        src: '/social/instagramtif.svg',
        alt: 'Instagram',
    },
];

interface FooterProps {
    platform: Platform;
}

export const Footer: FC<FooterProps> = (props) => {
    const { platform } = props;

    const isDesktop = platform === Platform.DESKTOP;

    return (
        <div className={cn(styles.Footer, styles[`Footer_platform_${platform}`])}>
            <div className={styles.Content}>
                <div className={styles.Header}>
                    Контакты
                </div>
                <div className={styles.ContactsWrapper}>
                    <a
                        target="_blank"
                        className={styles.Address}
                        href="https://yandex.ru/maps/org/montana/203046046767/?ll=34.048368%2C44.933582&z=17.16"
                    >
                        Россия, г.Симферополь, ул.Узловая 18
                        <br />
                        Пн - Сб с 11:00 до 20:00
                    </a>
                    {platform === Platform.DESKTOP ? (
                        <div className={styles.Contacts}>
                            <a
                                className={styles.PhoneNumber}
                                href="tel: +79785777970"
                            >
                                +7 978 5 777 970
                            </a>
                            <br />
                            <a
                                className={styles.Email}
                                href={`mailto:${EMAIL}`}
                            >
                                {EMAIL}
                            </a>
                        </div>
                    ) : null}
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
                                    width={isDesktop ? 50 : 30}
                                    height={isDesktop ? 50 : 30}
                                    alt={alt}
                                    title={alt}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <img
                className={styles.Image}
                src="/my-life-my-rules.png"
                alt="Моя машина – это отражение моей души"
            />
        </div>
    );
};
