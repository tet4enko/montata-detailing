import { SectionTitle } from '@/components/SectionTitle';

import styles from './page.module.css';

export default function Price () {

    return (
        <div className={styles.Page}>
            <div className={styles.Content}>
                <SectionTitle
                    text="ЦЕНЫ НА ДЕТЕЙЛИНГ УСЛУГИ"
                />
                <div className={styles.Description}>
                    Индивидуальное обслуживание, гарантированный результат, использование сертифицированных автохимикатов — у нас вы будете чувствовать себя комфортно. Обратите внимание, что наши услуги предоставляются исключительно по предварительной записи.
                </div>
                <div className={styles.Section}>
                    <h2 className={styles.H2}>
                        Полировка
                    </h2>
                    <div className={styles.Services}>
                        <div className={styles.Service}>
                            <div className={styles.H3}>
                                Полировка кузова
                            </div>
                            <table className={styles.Table}>
                                <thead className={styles.TableHeader}>
                                    <tr>
                                        <th>I ранг</th>
                                        <th>II ранг</th>
                                        <th>III ранг</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>от 13000 р</td>
                                        <td>от 16000 р</td>
                                        <td>от 20000 р</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.Service}>
                            <div className={styles.H3}>
                                Полировка фар
                            </div>
                            <table className={styles.Table}>
                                <thead className={styles.TableHeader}>
                                    <tr>
                                        <th>I ранг</th>
                                        <th>II ранг</th>
                                        <th>III ранг</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>от 3000 р</td>
                                        <td>от 4000 р</td>
                                        <td>от 6000 р</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.Service}>
                            <div className={styles.H3}>
                                Полировка декоративных вставок салона
                            </div>
                            <div>
                                индивидуальный просчет
                            </div>
                        </div>
                        <div className={styles.Service}>
                            <div className={styles.H3}>
                                Полировка лобового стекла
                            </div>
                            <div>
                                от 5000 р
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Section}>
                    <h2 className={styles.H2}>
                        Антигравийная защитная пленка
                    </h2>
                    <div className={styles.Services}>
                        <div className={styles.Service}>
                            <table className={styles.Table}>
                                <thead className={styles.TableHeader}>
                                    <tr>
                                        <th></th>
                                        <th>I ранг</th>
                                        <th>II ранг</th>
                                        <th>III ранг</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.TableRow}>
                                        <td>Optimal</td>
                                        <td>от 8000 р</td>
                                        <td>от 10000 р</td>
                                        <td>от 12000 р</td>
                                    </tr>
                                    <tr className={styles.TableRow}>
                                        <td>Prime</td>
                                        <td>от 38000 р</td>
                                        <td>от 45000 р</td>
                                        <td>от 53000 р</td>
                                    </tr>
                                    <tr className={styles.TableRow}>
                                        <td>Platinum</td>
                                        <td>от 14000 р</td>
                                        <td>от 10000 р</td>
                                        <td>от 12000 р</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
