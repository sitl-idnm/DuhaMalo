import styles from './styles.module.css';

type IProps = {
  onGetQuoteClick: () => void;
};

export const IntroTitle = ({ onGetQuoteClick }: IProps) => {
  return (
    <section className={styles.introTitle}>
      <h1>Маркетинг в&nbsp;данных и&nbsp;идеях</h1>
      <a href='#' onClick={(e) => {
        e.preventDefault();
        onGetQuoteClick();
      }}>Запросить кейсы</a>
    </section>
  );
};
