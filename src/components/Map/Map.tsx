import { SubtextAnimation } from '../SubtextAnimation';
import { TextAnimation } from '../TextAnimation';
import styles from './styles.module.css';

export const Map = () => {
  return (
		<section className={styles.wrapper}>
				<div className={styles.titleWrapper}>
				<TextAnimation
          text={`Хотите стать одним из нас?`}
          style={styles.title}
				/>

				<SubtextAnimation
					subtext={'Приглашаем в команду'}
					style={styles.description}
				/>
				</div>
    </section>
  );
};
