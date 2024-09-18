/* eslint-disable react-hooks/exhaustive-deps */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './style.module.css'; // Импортируйте CSS файл для стилизации

gsap.registerPlugin(ScrollTrigger, useGSAP);

const texts = [
  "Делаем полный анализ рынка",
  "Разрабатываем креативные концепции",
  "Вызываем эмоции и желание купить у ваших клиентов",
  "Даём результат, который предвосхищает ожидания"
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null); // Реф для отслеживания видимости

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Блок стал видимым
        }
      });
    }, {
      threshold: 0.5 // Запускать, когда 50% элемента видимо
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const mst = useRef(null)
  const wrapper = useRef(null)

  useGSAP(() => {
    const wr = wrapper.current
    const visible = mst.current
    const hidden = textRef.current
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wr,
        start: 'top 50%'
      }
    })
    tl.to(hidden, {
      duration: 27
    }).set(hidden, {
      autoAlpha: 0
    }).fromTo(visible, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2
    })
  })

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <div ref={textRef} className={styles.textAnimationContainer}>
        {isVisible && (
          <TypeAnimation
            sequence={[
              ...texts.map(text => [text, 1000, '', 500]), // Показываем текст, ждем 2 секунды, затем очищаем
            ].flat()}
            wrapper="p"
            cursor={true}
            repeat={0} // Не повторять
          />
        )}
      </div>
      <div className={styles.textAnimationContainerSecond}>
        <h2 ref={mst}>MST</h2>
      </div>
    </div>
  );
};
