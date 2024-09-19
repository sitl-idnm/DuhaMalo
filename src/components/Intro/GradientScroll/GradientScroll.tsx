import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'; // Подключение CSS для градиента
import { detect } from 'detect-browser';

export const GradientScroll: React.FC = () => {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
    const browser = detect();
    if (browser?.name === 'safari') {
        setIsSafari(true);
        }
    }, []);

    return (
        <div className={`${styles.gradientContainer} ${isSafari ? styles.gradientSafari : ''}`}>
            {/* Градиент будет переливаться и двигаться */}
        </div>
    );
};
