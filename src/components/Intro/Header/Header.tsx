import styles from './styles.module.css';
import MainLogo from '../../../assets/Intro/main-logo.svg';
import Tg from '../../../assets/Intro/tg.svg';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.headerLogo}>
        <a href='#'>
          <img src={MainLogo} alt='mst-logo' />
        </a>
      </div>
      <div className={styles.headerContent}>
        <a href='tel:+79869900999'>+7 (986) 990 09-99</a>
        <a href="https://t.me/mst_agency"><img src={Tg} alt='tg-icon' /></a>
      </div>
    </section>
  );
};
