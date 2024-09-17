import styles from './styles.module.css';
import policy from '../../../public/policy.pdf';
import logoFooter from '../../assets/svg/logoFooter.svg';
import telegram from '../../assets/svg/telegram.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.footerRow}>
            <a href="#" className={styles.footerLogo}>
              <img src={logoFooter} alt="Логотип компании" className={styles.footerLogoImage} />
            </a>
            <div>
              <a href='tel:+79869900999' className={styles.phone}>
                +7 (986) 990 09-99
              </a>
              <a href='mailto:info@agency-mst.com' className={styles.email}>
                info@agency-mst.com
              </a>
          </div>
          </div>
          <div className={styles.footerRow}>
            <div>
              <p className={styles.footerCopyright}>Copyright © 2024 MST. All rights reserved</p>
              <a href={policy} className={styles.footerPolicy}>Политика конфиденциальности</a>
            </div>

            <a href="https://t.me/mst_agency" className={styles.footerTelegram}>
              <img src={telegram} alt="Иконка телеграма" className={styles.footerTelegramImage} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    // <div className={styles.footerContainer}>
    //   <div className={styles.footerLeft}>
    //     <p>Copyright © 2024 MST. All rights reserved</p>
    //     <a href={policy}>Политика конфиденциальности</a>
    //   </div>
    //   <div className={styles.footerRight}>
    //     <a href='mailto:info@agency-mst.com' className={styles.email}>
    //       info@agency-mst.com
    //     </a>
    //     <a href='tel:+79869900999' className={styles.phone}>
    //       +7 (986) 990 09-99
    //     </a>
    //   </div>
    // </div>
  );
};
