import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <p>Copyright © 2024 MST. All rights reserved</p>
        <a href='#'>Политика конфиденциальности</a>
      </div>
      <div className={styles.footerRight}>
        <a href='mailto:info@agency-mst.com' className={styles.email}>
          info@agency-mst.com
        </a>
        <a href='tel:+79869900999' className={styles.phone}>
          +7 (986) 990 09-99
        </a>
      </div>
    </div>
  );
};
