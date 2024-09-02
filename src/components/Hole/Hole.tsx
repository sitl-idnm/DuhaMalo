import styles from './styles.module.css';
import { Circle } from './Circle';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hole from '../../assets/Hole/hole.svg';
import pipe from '../../assets/Tube/pipe.svg';
import gradient from '../../assets/Tube/gradient.svg';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface CardScrollAnimationProps {
  children: React.ReactNode;
}

const CardScrollAnimation = ({ children }: CardScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '30% top',
          end: '+=400%',
          scrub: true,
          pin: true,
        }
      });

      cards.forEach((card) => {
        timeline
          .fromTo(card,
            { scale: 0, x: '270%', opacity: 0 },
            {
              scale: 1, x: '0%', opacity: 1,
              ease: 'power2.out',
              duration: 10,
              stagger: 0.5,
            }
          )
          .to(card,
            {
              scale: 0, x: '-100%', opacity: 0,
              ease: 'power2.in',
              duration: 1,
            }
          , `+=0.5`);
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {children}
    </div>
  );
};

export const Tube: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const pipeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ballRef.current && pipeRef.current) {
      const path = pipeRef.current.querySelector('path');

      if (path) {
        gsap.timeline({
          scrollTrigger: {
            trigger: pipeRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          }
        }).to(ballRef.current, {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
            start: 1,
            end: 0
          },
          duration: 1,
          ease: 'none'
        }).to(ballRef.current, {
          x: 500,
          y: 100,// Перемещение за правый край экрана
          scale: 50, // Увеличение размера
          rotate: 180,
          duration: 1, // Длительность финальной анимации
          ease: 'power2.inOut'
        });
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={ pipe } className={styles.tube} alt="Pipe Icon" />
      <svg ref={pipeRef} className={styles.pipe} viewBox="0 0 400 600">
        <path
          d="M6.82571 641C6.82571 641 -7.13588 502.341 8.92803 444.632C9.31885 443.21 9.73664 441.788 10.1679 440.415C33.7112 363.192 81.876 351.719 99.638 289.155C110.608 250.519 114.098 214.629 102.104 167.314C87.8057 110.929 45.7861 101.466 28.5498 70.331C9.96576 36.6469 10.2083 0.216919 10.2083 0.216919" // Замените путь, если нужно
          fill="transparent"
          stroke="transparent"
          strokeWidth="2"
        />
      </svg>
      <div ref={ballRef} className={styles.ball}>
        {/* Замените этот div на вашу иконку */}
        <img src={ gradient } alt="Ball Icon" />
      </div>
    </div>
  );
};

export const Hole = () => {
  return (
    <div className={styles.breaker}>
      <CardScrollAnimation>
        <Tube />
        <h2 className={styles.title}>Комплексно подходим к&nbsp;решению маркетинговых задач бизнеса</h2>
        <div className={styles.slider}>
          <div className={styles.cardWrapper}>
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
            <div className={`${styles.card} ${styles.cardFirst}`}>
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
        </div>
        <img src={hole} alt="Изображение чёрной дыры" className={styles.hole} />
      </CardScrollAnimation>
    </div>
  );
}
