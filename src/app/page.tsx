
import { PromoSlider } from './components/PromoSlider/PromoSlider';
import { Services } from './components/Services/Services';

// import { WorkExamples } from './components/WorkExamples/WorkExamples';
import styles from './page.module.css';

export default function Home () {

    return (
        <div className={styles.page}>
            <PromoSlider />
            <Services />
            {/* <WorkExamples /> */}
        </div>
    );
}
