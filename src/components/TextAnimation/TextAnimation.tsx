import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames'
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger)

interface TextAnimationProps {
  text: string | string[];
  style?: string;
}

export function TextAnimation({ text, style }: TextAnimationProps) {
  const TextAnimka = useRef<HTMLHeadingElement>(null);
  const TextLine = useRef<HTMLDivElement>(null);

  const textClass = classNames(styles.Animka, style);

  useGSAP(() => {
    const Line = TextLine.current;
    if (Line) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: Line,
          scrub: 1,
          start: 'top 100%'
        }
      });
      tl.fromTo(Line, { x: -200 }, { x: 0 });
    }
  });

  useGSAP(() => {
    const TextAnima = TextAnimka.current;
    if (TextAnima) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: TextAnima,
          scrub: 1,
          start: 'top 70%'
        }
      });
      tl.fromTo(TextAnima, {
        backgroundPositionX: '100%',
        x: -100
      }, {
        backgroundPositionX: '0%',
        x: 0
      });
    }
  });

  return (
    <h2 className={textClass} ref={TextAnimka}>
      {Array.isArray(text) ? text.map((line, index) => (
        <span key={index}>
          {line} <br />
        </span>
      )) : text}
    </h2>
  );
}
