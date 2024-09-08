import styles from './styles.module.css';
import { IntroTitle } from './IntroTitle';
import { Header } from './Header';
import { GradientScroll } from './GradientScroll';
import { FormCase } from '../Forms';
import { TorusScene } from './TorusScene/TorusScene.tsx';

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
      <div className={styles.titleTorus}>
        <IntroTitle onGetQuoteClick={onGetQuoteClick} />
        {showFormCase && <FormCase onClose={onClose} />}
        <TorusScene />
      </div>
    </section>
  );
};
