import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { FoldersTitle } from './FoldersTitle';
import { Folder } from './Folder';

gsap.registerPlugin(ScrollTrigger);

type IProps = {
  onGetQuoteClick: () => void;
};

export const Folders = ({ onGetQuoteClick }: IProps) => {
    useEffect(() => {
        const container = document.querySelector(`.${styles.foldersContent}`);
        const wrapper = document.querySelector(`.${styles.foldersWrapper}`);
        const folders = gsap.utils.toArray(`.${styles.folder}`) as HTMLElement[];

        // Разворачиваем порядок элементов, чтобы они улетали в обратном порядке
        folders.reverse();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 10% top', // Начинаем, когда верх контейнера достигает верха окна
                end: '+=250%', // Прокручиваем высоту контейнера
                scrub: true, // Привязка анимации к прокрутке
                pin: true, // Фиксируем контейнер на месте
            }
        });

        // Анимация для каждой карточки, запускается последовательно
        folders.forEach((folder) => {
            tl.fromTo(folder,
                { y: 0, opacity: 1 },
                {
                    y: -100, // Перемещаем вверх
                    opacity: 0, // Плавное исчезновение
                    ease: 'sine.in', // Плавность анимации
                    duration: 100, // Длительность анимации
                }, "+=5"); // Задержка между анимациями
        });

        // Анимация для всего wrapper после всех карточек
        tl.fromTo(wrapper,
            { y: 0, opacity: 1 },
            {
                y: -1000, // Перемещаем вверх
                opacity: 0, // Плавное исчезновение
                ease: 'power2.in', // Плавность анимации
                duration: 5, // Длительность анимации
            });
    }, []);

    return (
        <section className={styles.folders}>
            <div className={styles.foldersContent}>
                <FoldersTitle />
                <a href='#' onClick={(e) => {
                    e.preventDefault();
                    onGetQuoteClick();
                }}>
                    Получить кп
                </a>
                <div className={styles.foldersWrapper}>
                    <div className={styles.folder}>
                        <div className={styles.folder1}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел мобильной разработки</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder2}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Креативный отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder3}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>SЕО отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder4}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел развития</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder5}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>HR отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder6}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>IT отдел</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder7}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Отдел медиабаинга</p>
                        </div>
                    </div>
                    <div className={styles.folder}>
                        <div className={styles.folder8}>
                            <div className={styles.folderImg}>
                                <Folder />
                            </div>
                            <p>Финансовый отдел</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
