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
        <a href='tel:+7 (999) 999 99-99'>+7 (999) 999 99-99</a>
        <img src={Tg} alt='tg-icon' />
      </div>
    </section>
  );
};
