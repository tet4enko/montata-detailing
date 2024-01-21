'use client';

import { FC, useCallback, useState } from "react";
import { toast } from 'react-toastify';

import cn from 'classnames';

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input";
import { EMAIL } from "@/const";
import { Platform } from "@/types";

import styles from './Feedback.module.css';

interface FeedbackProps {
    platform: Platform;
    onSuccess?: () => void;
}

export const Feedback: FC<FeedbackProps> = (props) => {
    const { platform, onSuccess } = props;

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "tetchenko@gmail.com",
            Password : "B24E0853AAF9F5817E12716D617922E8AEC3",
            To : EMAIL,
            From : "tetchenko@gmail.com",
            Subject : "Обратный звонок",
            Body: `${name} ${phone}`
        }).then(() => {
            toast(
                'Мы свяжемся с Вами в ближайшее время!',
                {
                    theme: 'dark',
                    type: 'success'
                },
            );
            onSuccess && onSuccess();
        });
    }, [name, onSuccess, phone]);

    return (
        <div className={cn(styles.Feedback, styles[`Feedback_platform_${platform}`])}>
            <div className={cn(styles.Header)}>
                    Обратный звонок
            </div>
            <div className={cn(styles.Description)}>
                    Заполните данные ниже и мы вам перезвоним:
            </div>
            <div className={cn(styles.Form)}>
                <Input
                    type="text"
                    value={name}
                    onChange={setName}
                    placeholder="Имя"
                />
                <Input
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    placeholder="+7 000 000 00 00"
                />
                <Button
                    className={styles.Submit}
                    type="primary"
                    text="Отправить заявку"
                    onClick={handleSubmit}
                />
            </div>
            <div
                className={cn(styles.Agree)}
            >
            Нажимая на кнопку, вы подтверждаете свое
согласие на обработку персональных данных
            </div>
        </div>
    );
};
