import { FC, useCallback, useEffect, useState } from "react";

import cn from 'classnames';

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { EMAIL } from "@/const";

import styles from './FeedbackModal.module.css';

interface FeedbackModalProps {
    visible: boolean;
    onClose: () => void;
}

export const FeedbackModal: FC<FeedbackModalProps> = ({ visible, onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setName("");
        setPhone("");
    }, [visible]);

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
        }).then((data) => {
            console.log(data);

            onClose();
        });
    }, [name, onClose, phone]);

    return (
        <Modal
            visible={visible}
            onClose={onClose}
        >
            <div className={cn(styles.Wrapper)}>
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
        </Modal>
    );
};
