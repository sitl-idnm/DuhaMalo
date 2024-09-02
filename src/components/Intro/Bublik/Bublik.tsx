import styles from './styles.module.css';
import Spline from '@splinetool/react-spline';

export const Bublik = () => {
  return (
    <div>
      <div className={styles.byblikDesktop}>
        <Spline scene="https://prod.spline.design/QK3C0oU3M0LilzdT/scene.splinecode" /> {/*Десктоп*/}
      </div>
      <div className={styles.byblikPlanshet}>
        <Spline scene="https://prod.spline.design/pjAWbEPDQU1mQoUN/scene.splinecode" /> {/*Планшет*/}
      </div>
      <div className={styles.byblikMobile}>
        <Spline scene="https://prod.spline.design/ZniqoNkTYKfeDUBK/scene.splinecode" /> {/*Планшет*/}
      </div>
    </div>
  );
};
