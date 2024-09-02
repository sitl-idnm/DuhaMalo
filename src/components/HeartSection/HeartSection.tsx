import styles from './styles.module.css';
import { Arrow } from './Arrow';
import { ArrowLine } from './ArrowLine';
import { Heart } from './Heart';
import { useEffect, useRef, useState } from 'react';
import { FormWant } from '../Forms';

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
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleBlocks, setVisibleBlocks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current && containerRef.current) {
        const arrowRect = arrowRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const textBlocks = containerRef.current.querySelectorAll(
          `.${styles.textBlock}`,
        );

        // Check if the arrow is at the same vertical level as each text block
        textBlocks.forEach((block, index) => {
          const blockRect = block.getBoundingClientRect();
          if (
            arrowRect.top < blockRect.bottom &&
            arrowRect.bottom > blockRect.top
          ) {
            setVisibleBlocks((prev) => {
              const newVisibleBlocks = [...prev];
              newVisibleBlocks[index] = true; // Set block to visible
              return newVisibleBlocks;
            });
          } else {
            setVisibleBlocks((prev) => {
              const newVisibleBlocks = [...prev];
              newVisibleBlocks[index] = false; // Set block to not visible
              return newVisibleBlocks;
            });
          }
        });

        // Check if the arrow has reached 50 pixels before the bottom of the container
        if (arrowRect.bottom >= containerRect.bottom - 50) {
          setIsArrowVisible(false); // Hide the arrow
        } else {
          setIsArrowVisible(true); // Show the arrow
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showForm) {
      setScrollPosition(window.scrollY); // Сохраняем текущую позицию скроллинга
    } else {
      window.scrollTo(0, scrollPosition); // Восстанавливаем сохраненную позицию скроллинга
    }
  }, [showForm, scrollPosition]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.leftText}>
          <div
            className={styles.textBlock}
            style={{ opacity: visibleBlocks[0] ? 1 : 0.3 }}
          >
            Удаленная работа
          </div>
          <div
            className={styles.textBlock}
            style={{ opacity: visibleBlocks[1] ? 1 : 0.3 }}
          >
            Обучение, наставничество и поддержка
          </div>
          <div
            className={styles.textBlock}
            style={{ opacity: visibleBlocks[2] ? 1 : 0.3 }}
          >
            Праздники и корпоративы в Дубае и других странах
          </div>
        </div>
        <div>
          <div
            className={styles.arrow}
            ref={arrowRef}
            style={{ opacity: isArrowVisible ? 1 : 0 }} // Arrow visibility controlled here
          >
            <Arrow />
          </div>
          <div className={styles.arrowLine}>
            <ArrowLine />
          </div>
        </div>
        <div className={styles.rightText}>
          <div
            className={styles.textBlock}
            style={{ opacity: visibleBlocks[3] ? 1 : 0.3 }}
          >
            Открытое общение и максимум свободы в рамках выполнения задач
          </div>
          <div
            className={styles.textBlock}
            style={{ opacity: visibleBlocks[4] ? 1 : 0.3 }}
          >
            Комфортная команда, которая создает идеальную среду для роста
          </div>
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
