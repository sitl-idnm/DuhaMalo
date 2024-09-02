import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';
import { Bublik } from './Bublik';
import { GradientScroll } from './GradientScroll';
import { FormCase } from '../Forms';

type IProps = {
  onGetQuoteClick: () => void;
  showFormCase: boolean;
  onClose: () => void;
};

export const Intro = ({ onGetQuoteClick, showFormCase, onClose }: IProps) => {
  return (
    <section className={styles.intro}>
      <Header />
      <GradientScroll />
      <IntroTitle onGetQuoteClick={onGetQuoteClick} />
      {showFormCase && <FormCase onClose={onClose} />}
      <Bublik />
    </section>
  );
};
