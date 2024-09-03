import { TextAnimation } from '../TextAnimation';
import styles from './styles.module.css';

export const Map = () => {
  return (
		<section className={styles.wrapper}>
			<div className={styles.contreWrapper}>
				<div className={styles.titleWrapper}>
				<TextAnimation
          text={`Хотите стать одним из нас?`}
          style={styles.title}
      	/>
				<p className={styles.description}>Приглашаем в команду</p>
				</div>
			</div>
    </section>
  );
};
