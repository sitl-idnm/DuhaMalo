import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { FoldersTitle } from './FoldersTitle';
import { Folder } from './Folder';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type IProps = {
  onGetQuoteClick: () => void;
};

export const Folders = ({ onGetQuoteClick }: IProps) => {
    const buttonKP = useRef(null)

    useGSAP(() => {
        const button = buttonKP.current
        const container = document.querySelector(`.${styles.foldersContent}`);
        const folders = gsap.utils.toArray(`.${styles.folder}`) as HTMLElement[];

        // Разворачиваем порядок элементов, чтобы они улетали в обратном порядке
        folders.reverse();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 10%', // Начинаем, когда верх контейнера достигает верха окна
                end: '+=250%', // Прокручиваем высоту контейнера
                scrub: 2, // Привязка анимации к прокрутке
                pin: true // Фиксируем контейнер на месте
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
                    duration: 1, // Длительность анимации
                    zIndex: -1
                }); // Задержка между анимациями
        });
        tl.fromTo(button, {
            opacity: 0
        }, {
            opacity: 1
        })
    }, []);

    return (
        <section className={styles.folders}>
            <div className={styles.foldersContent}>
                <FoldersTitle />
                <a href='#' ref={buttonKP} onClick={(e) => {
                    e.preventDefault();
                    onGetQuoteClick();
                }}>
                    Получить коммерческое предложение
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
