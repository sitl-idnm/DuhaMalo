import { TextAnimation } from '../TextAnimation';
import styles from './styles.module.css';

export const Need = () => {
  return (
    <div className={styles.needWrapper}>
      <TextAnimation
          text={`Нам нужны`}
          style={styles.title}
      />
      <div className={styles.section1}>
        <div className={styles.orangeSection}>
          Уверенные middle- и senior-специалисты
        </div>
        <div className={styles.description1}>
          Обеспечим 100% интересных проектов
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.orangeSection}>
          Проактивные junior-специалисты
        </div>
        <div className={styles.description2}>
          Всему научим и дадим все возможности для роста
        </div>
      </div>
    </div>
  );
};
