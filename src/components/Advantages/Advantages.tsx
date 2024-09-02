import styles from './styles.module.css';
import { AnimatedCard } from './AnimatedCard'

export const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={10} text="лет опыта" index={0} />
			</div>
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={85} text="высококлассных специалистов" index={1} />
			</div>
			<div className={styles.advantagesContent}>
				<AnimatedCard targetNumber={8} text="отделов для идеального результата" index={2} />
			</div>
		</section>
	)
}
