import { FC } from "react";

import cn from 'classnames';
import Image from 'next/image';

import { SectionTitle } from "@/components/SectionTitle";
import { Platform } from "@/types";

import styles from './Services.module.css';

interface ServicesProps {
    platform: Platform
}

type Item = {
    src: string;
    title: string;
    description: string;
}

const ITEMS: Item[] = [
    {
        src: '/services/ceramic.jpg',
        title: 'Керамическое покрытие кузова',
        description: 'От 6000 Р',
    },
    {
        src: '/services/polirovka.jpg',
        title: 'Полировка кузова',
        description: 'От 7000 Р',
    },
    {
        src: '/services/himchistka.jpg',
        title: 'Химчистка салона',
        description: 'От 5000 Р',
    },
    {
        src: '/services/plenka.jpg',
        title: 'Оклейка кузова',
        description: 'От 10000 Р',
    },
    {
        src: '/services/koja.jpg',
        title: 'Реставрация кожи',
        description: 'От 3000 Р',
    },
    {
        src: '/services/moika.jpg',
        title: 'Детейлинг-мойка',
        description: 'От 2000 Р',
    },
];

const renderItem = ({ src, title, description }: Item, index: number) => {
    return (
        <div
            className={styles.Item}
            key={index}
        >
            <Image
                src={src}
                alt={title}
                title={title}
                fill
            />
            <div className={styles.ItemShadow} />
            <div className={styles.ItemText}>
                <div className={styles.ItemTitle}>
                    {title}
                </div>
                <div className={styles.ItemDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export const Services: FC<ServicesProps> = (props) => {
    const { platform } = props;

    return (
        <div className={cn(styles.Services, styles[`Services_platform_${platform}`])}>
            <SectionTitle
                text="Услуги"
                platform={platform}
            />
            <div className={styles.Description}>
                Индивидуальное обслуживание, гарантированный результат, использование сертифицированных автохимикатов — у нас вы будете чувствовать себя комфортно. Обратите внимание, что наши услуги предоставляются исключительно по предварительной записи.
            </div>
            <div className={styles.Content}>
                {ITEMS.map((item, index) => renderItem(item, index))}
            </div>
        </div>
    );
};
