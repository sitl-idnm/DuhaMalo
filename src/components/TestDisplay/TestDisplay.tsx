import styles from './style.module.css'

export const TestDisplay = () => {
	return (
		<div className={styles.display}>
			<p>InnerWidth</p>
			{window.innerWidth}
			<p>outerWidth</p>
			{window.outerWidth}
			<p>InnerHeight</p>
			{window.innerHeight}
			<p>outerHeight</p>
			{window.outerHeight}
			<p>screen.width</p>
			{screen.width}
		</div>
	)
}
