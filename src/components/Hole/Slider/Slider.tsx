import styles from './styles.module.css';
import { Circle } from '../Circle';

export const Slider = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.cardIcon}>
					<Circle />
				</div>
				<h3 className={styles.cardTitle}>Создаем сайты</h3>
				<div className={styles.cardContent}>
					<ul className={styles.cardList}>
						<li className={styles.cardItem}>Landing Page</li>
						<li className={styles.cardItem}>Многостраничный сайт</li>
						<li className={styles.cardItem}>Квиз</li>
						<li className={styles.cardItem}>Сайт-визитка</li>
						<li className={styles.cardItem}>Интернет-магазин</li>
						<li className={styles.cardItem}>Блог</li>
					</ul>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.cardIcon}>
					<Circle />
				</div>
				<h3 className={styles.cardTitle}>Приводим лидов –<br />горячих клиентов</h3>
				<div className={styles.cardContent}>
					<p className={styles.cardDescription}>Подбираем и фильтруем лидов по конкретным критериям бизнеса, обеспечивая качественные заявки.</p>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.cardIcon}>
					<Circle />
				</div>
				<h3 className={styles.cardTitle}>Настраиваем и ведем<br />рекламные кампании</h3>
				<div className={styles.cardContent}>
					<ul className={styles.cardList}>
						<li className={styles.cardItem}>Яндекс Директ</li>
						<li className={styles.cardItem}>Google Реклама</li>
					</ul>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.cardIcon}>
					<Circle />
				</div>
				<h3 className={styles.cardTitle}>Запускаем<br />и ведем SMM</h3>
				<div className={styles.cardContent}>
					<ul className={styles.cardList}>
						<li className={styles.cardItem}>YouTube</li>
						<li className={styles.cardItem}>Telegram</li>
						<li className={styles.cardItem}>ВКонтакте</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
