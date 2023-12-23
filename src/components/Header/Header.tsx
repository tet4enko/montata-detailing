import { FC } from "react";

import Image from 'next/image';
import Link from "next/link";

// import { Button } from "@/components/Button";
import styles from './Header.module.css';

// const MENU_ITEMS = [
//     {
//         label: 'Главная',
//         href: '/',
//     },
//     {
//         label: 'Услуги',
//         href: '/uslugi',
//     },
//     {
//         label: 'Прайс-лист',
//         href: '/price',
//     },
//     {
//         label: 'Наши работы',
//         href: '/',
//     },
//     {
//         label: 'Команда',
//         href: '/',
//     },
//     {
//         label: 'Контакты',
//         href: '/',
//     },
// ];

export const Header: FC = () => {
    return (
        <div className={styles.Header}>
            <Link
                href="/"
                className={styles.Logo}
            >
                <Image
                    src="/header-logo.svg"
                    alt="Montana logo"
                    width={125}
                    height={32}
                />
            </Link>
            {/* <ul className={styles.Menu}>
                {MENU_ITEMS.map(({ label, href}) => (
                    <li
                        className={styles.MenuItem}
                        key={href}
                    >
                        <Link
                            href={href}
                            className={styles.MenuItemLink}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul> */}
            {/* <Button
                className={styles.CallbackButton}
                type="secondary"
                text="Обратный звонок"
            /> */}
        </div>
    );
};
