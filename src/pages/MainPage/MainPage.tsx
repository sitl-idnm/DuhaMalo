import { Need } from '../../components/Need';
import styles from './styles.module.css';
import { HeartSection } from '../../components/HeartSection';
import { Intro } from '../../components/Intro';
import { Leader } from '../../components/Leader';
import { Advantages } from '../../components/Advantages';
import { Result } from '../../components/Result';
import { About } from '../../components/About';
import { Hole } from '../../components/Hole';
import { Map } from '../../components/Map';
import { Folders } from '../../components/Folders';
import { FormKP } from '../../components/Forms';
import { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { AboutMobile } from '../../components/AboutMobile';

export const MainPage = () => {
  const [showFormKP, setShowFormKP] = useState(false);
  const [showFormCase, setShowFormCase] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const handleGetQuoteClickKP = () => {
    console.log('Кнопка нажата, показываем форму');
    setShowFormKP(true);
  };
  const handleCloseFormKP = () => {
    setShowFormKP(false);
    setRenderKey(renderKey + 1);
  };

  const handleGetQuoteClickCase = () => {
    console.log('Кнопка нажата, показываем форму');
    setShowFormCase(true);
  };
  const handleCloseFormCase = () => {
    setShowFormCase(false);
    setRenderKey(renderKey + 1);
  };

  useEffect(() => {
    if (renderKey > 0) {
      window.scrollTo(0, 0);
    }
  }, [renderKey]);

  return (
    <div key={renderKey} className={styles.mainPageWrapper}>
      <Intro
        onGetQuoteClick={handleGetQuoteClickCase}
        showFormCase={showFormCase}
        onClose={handleCloseFormCase}
      />
      <About />
      <AboutMobile />
      <Advantages />
      <Leader />
      <Result />
      <Hole />
      <Folders onGetQuoteClick={handleGetQuoteClickKP} />
      {showFormKP && <FormKP onClose={handleCloseFormKP} />}
      <Map />
      <Need />
      <HeartSection />
      <Footer/>
    </div>
  );
};
