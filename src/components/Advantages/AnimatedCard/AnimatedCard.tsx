import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css'; // Подключение CSS-модуля

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ targetNumber, text, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [displayNumber, setDisplayNumber] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      let start = 0;
      const end = targetNumber;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const value = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
        setDisplayNumber(value);
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, isAnimating, targetNumber]);

  useEffect(() => {
    if (inView && displayText !== text) {
      let iteration = 0;
      const totalIterations = text.length + 5;
      const interval = setInterval(() => {
        setDisplayText((prevText) => {
          return text
            .split('')
            .map((_, index) => {
              if (iteration < totalIterations && iteration <= index) {
                return Math.random().toString(36).substring(2, 3);
              } else if (iteration >= index) {
                return text[index];
              }
              return prevText[index] || ' ';
            })
            .join('');
        });

        if (iteration > totalIterations) {
          clearInterval(interval);
          setDisplayText(text);
        } else {
          iteration++;
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.fadeIn : ''}`}
      style={{ transitionDelay: `${index * 0.3}s` }}
    >
      <div className={styles.cardContent}>
        <div className={styles.number}>
          {index === 0 ? `>${displayNumber}` : displayNumber}
        </div>
        <div className={styles.text}>{displayText}</div>
      </div>
    </div>
  );
};

interface AnimatedCardProps {
  targetNumber: number;
  text: string;
  index: number;
}
