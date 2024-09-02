import styles from './styles.module.css';
import { Ball } from './Ball';
import { Logo } from './Logo';

import drop from '../../assets/Leader/drop.svg'
import dropSmall from '../../assets/Leader/dropSmall.svg'
import dropBigger from '../../assets/Leader/dropBigger.svg'


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*---------------------------------------------------------------------------------------------*/
/*                                  Анимация плавного появления букв                           */
/*---------------------------------------------------------------------------------------------*/

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSpan = ({ children, className }: AnimatedSpanProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const letters = spanRef.current.querySelectorAll(`.${styles.letter}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spanRef.current,
          start: 'top 90%',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      tl.fromTo(
        letters,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out', stagger: 0.05 }
      );
    }
  }, []);

  return (
    <span ref={spanRef} className={className}>
      {String(children).split('').map((letter, index) => (
        <span key={index} className={styles.letter}>
          {letter.trim() === '' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealRef.current) {
      gsap.fromTo(
        revealRef.current.children,
        { y: 800, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: revealRef.current,
            start: 'top 60%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <span ref={revealRef} className={styles.titleAnimationComponent}>
      {children}
    </span>
  );
};

interface SvgRevealProps {
  children: React.ReactNode;
  className?: string;
}

const SvgReveal = ({ children, className }: SvgRevealProps) => {
  const svgRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      gsap.fromTo(
        svgRef.current,
        { y: 300, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <span ref={svgRef} className={`${styles.logo} ${className}`}>
      {children}
    </span>
  );
};

export const Leader = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        <AnimatedSpan className={styles.titleNormal}>Лидеры в</AnimatedSpan>
        <SvgReveal><span className={styles.logo}>
          <Logo />
        </span></SvgReveal>
        <ScrollReveal><span className={styles.titleAnimation}>Лидогенерации</span></ScrollReveal>
      </h2>
      <p className={styles.description}>
        Наша цель — стать компанией №&nbsp;1 в&nbsp;лидогенерации и мы уверенно
        идём&nbsp;к&nbsp;eё&nbsp;достижению!
      </p>
      <div className={styles.ball}>
        <Ball />
        <div className={styles.drop}><img src={drop} alt="Капля" /></div>
        <div className={styles.drop}><img src={dropSmall} alt="Капля Маленькая" /></div>
        <div className={styles.drop}><img src={dropBigger} alt="Капля Большая" /></div>
      </div>
    </section>
  );
};
