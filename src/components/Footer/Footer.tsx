import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <p>Copyright © 2024 MST. All rights reserved</p>
        <a href='#'>Политика конфиденциальности</a>
      </div>
      <div className={styles.footerRight}>
        <a href='mailto:email@mail.ru' className={styles.email}>
          email@mail.ru
        </a>
        <a href='tel:+79999999999' className={styles.phone}>
          +7 (999) 999 99-99
        </a>
      </div>
    </div>
  );
};
