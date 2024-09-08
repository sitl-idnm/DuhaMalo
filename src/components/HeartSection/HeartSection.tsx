import styles from './styles.module.css';
import { Arrow } from './Arrow';
import { ArrowLine } from './ArrowLine';
import { Heart } from './Heart';
import { FormWant } from '../Forms';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

type ArrowTextProps = {
  text: string;
  style: string;
};

function ArrowText({ text, style }: ArrowTextProps) {
  const animka = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const anim = animka.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: anim,
        start: 'top 50%',
        end: 'top 70%',
        scrub: 1
      }
    });
    tl.fromTo(anim, {
      opacity: 0.3
    }, {
      opacity: 1
    });
  });

  return (
    <div ref={animka} className={style}>
      <p>{text}</p>
    </div>
  );
}

type IProps = {
  onGetQuoteClick: () => void;
  showForm: boolean;
  onClose: () => void;
};

export const HeartSection = ({
  onGetQuoteClick,
  showForm,
  onClose,
}: IProps) => {
  const arrow = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const arrowOrange = arrow.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: arrowOrange,
        pin: true,
        scrub: 2,
        start: 'top 50%',
        end: '+=127%'
      }
    }).fromTo(arrowOrange, {
      opacity: 1
    }, {
      opacity: 0
    });
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftText}>
          <ArrowText
            text={'Удаленная работа'}
            style={styles.textBlock}
          />
          <ArrowText
            text={'Обучение, наставничество и поддержка'}
            style={styles.textBlock}
          />
          <ArrowText
            text={'Праздники и корпоративы в Дубае и других странах'}
            style={styles.textBlock}
          />
        </div>
        <div className={styles.centerLine}>
          <div>
            <div ref={arrow}>
              <Arrow />
            </div>
          </div>
          <div className={styles.arrowLine}>
            <ArrowLine />
          </div>
        </div>
        <div className={styles.rightText}>
          <ArrowText
            text={'Открытое общение и максимум свободы в рамках выполнения задач'}
            style={styles.textBlock}
          />
          <ArrowText
            text={'Комфортная команда, которая создает идеальную среду для роста'}
            style={styles.textBlock}
          />
        </div>
      </div>
      <div className={styles.heart}>
        <Heart />
        <div
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            onGetQuoteClick();
          }}
        >
          Хочу к вам
        </div>
        {showForm && <FormWant onClose={onClose} />}
      </div>
    </div>
  );
};
