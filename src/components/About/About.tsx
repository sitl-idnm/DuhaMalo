/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import styles from './style.module.css'; // Импортируйте CSS файл для стилизации

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const About = () => {

  if (window.innerWidth < 768) {
    return null;
  }

  const about = useRef(null);
  const leftCont = useRef(null);
  const rightCont = useRef(null);
  const leftBubl = useRef(null);
  const rightBubl = useRef(null);
  const centerBall = useRef(null);
  useGSAP(() => {
    const cont = about.current;
    const leftContain = leftCont.current;
    const rightContain = rightCont.current;
    const leftBubble = leftBubl.current;
    const rightBubble = rightBubl.current;
    const center = centerBall.current;
    gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: 'top 40%',
        scrub: 1,
        pin: true
      }
    })
      .fromTo(
        [leftContain, rightContain],
        {
          x: (i) => i === 0 ? -210 : 210
        },
        {
          x: (i) => i === 0 ? 0 : 0,
          zIndex: 2
        }
      )
      .fromTo(
        [leftBubble, rightBubble],
        {
          x: (i) => i === 0 ? -615 : 615
        },
        {
          x: (i) => i === 0 ? 0 : 0,
          zIndex: 10
        }
      )
      .fromTo(center,
        {
          opacity: 0
        },
        {
          opacity: 1,
          zIndex: 11,
        })
  });

  return (
    <section className={styles.about} ref={about}>
      <div className={styles.left__first} ref={leftBubl}>Делаем полный анализ рынка</div>
      <div className={styles.left__second} ref={leftCont}>Разрабатываем креативные концепции</div>
      <div className={styles.right__first} ref={rightCont}>Вызываем эмоции и желание купить у ваших клиентов</div>
      <div className={styles.right__second} ref={rightBubl}>Даём результат, который предвосхищает ожидания</div>
      <div className={styles.centerBall} ref={centerBall}></div>
    </section>
  );
};
