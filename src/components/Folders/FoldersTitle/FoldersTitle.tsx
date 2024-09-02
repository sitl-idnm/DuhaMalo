import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const FoldersTitle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 } // Визуализация элемента на 80% экрана
    );

    const currentRef = titleRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={titleRef} className={styles.foldersTitle}>
      <h2>
        Обеспечиваем результат сплоченной работой {' '}
        <span className={`${styles.titleOrange} ${isVisible ? styles.animate : ''}`}>
          8 отделов
        </span>
      </h2>
    </div>
  );
};
