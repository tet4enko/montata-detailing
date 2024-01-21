import { ToastContainer } from 'react-toastify';

import { headers } from 'next/headers';

import { getPlatform } from '@/lib/getPlatform';
import { Platform } from '@/types';

import { Feedback } from './components/Feedback/Feedback';
import { PromoSlider } from './components/PromoSlider/PromoSlider';
import { Services } from './components/Services/Services';

import 'react-toastify/dist/ReactToastify.css';
import styles from './page.module.css';

export default function Home () {
    const platform = getPlatform(headers().get('user-agent') || '');

    const isDesktop = platform === Platform.DESKTOP;

    return (
        <div className={styles.page}>
            <ToastContainer />
            <PromoSlider platform={platform} />
            <Services platform={platform} />
            {isDesktop ? null : (
                <Feedback platform={platform} />
            )}
        </div>
    );
}
