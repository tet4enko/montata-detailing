'use client';

import { FC, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import { Button } from "@/components/Button";

import { FeedbackModal } from "../FeedbackModal/FeedbackModal";

import "react-image-gallery/styles/css/image-gallery.css";
import styles from './PromoSlider.module.css';

const images: ReactImageGalleryItem[] = [
    {
        original: "/gallery/1.png",
        thumbnail: "/gallery/1.png",
    },
    {
        original: "/gallery/2.png",
        thumbnail: "/gallery/2.png",
    },
    {
        original: "/gallery/3.png",
        thumbnail: "/gallery/3.png",
    },
    {
        original: "/gallery/4.png",
        thumbnail: "/gallery/4p.png",
    },
];

export const PromoSlider: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className={styles.PromoSlider}>
            <ImageGallery
                items={images}
                additionalClass={styles.Gallery}
                showNav={false}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                slideDuration={300}
                slideInterval={5000}
                autoPlay
                lazyLoad
            />
            <div className={styles.Content}>
                <h1 className={styles.Header}>
                    Детейлинг автомобиля
                </h1>
                <div className={styles.Description}>
                Оказываем полный спектр услуг по детейлингу кузова,
    салона автомобиля и автостекл
                </div>
                <Button
                    className={styles.AppointmentButton}
                    type="primary"
                    text="Записаться"
                    onClick={() => setIsModalVisible(true)}
                />
                <FeedbackModal
                    visible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}
                />
            </div>
        </div>
    );
};
