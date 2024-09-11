import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';

interface SubtextAnimationProps {
  subtext: string | string[];
  style?: string;
}

gsap.registerPlugin(ScrollTrigger)

export const SubtextAnimation = ({ subtext, style }: SubtextAnimationProps) => {

  const Class = classNames(style);
  const Subtext = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (Subtext.current) {
      const text = Subtext.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          scrub: 1,
          start: 'top 200%',
          end: 'top 20%',
        }
      });

      tl.fromTo(
        text,
        { y: 150 },
        { y: 0, duration: 1 }
      );
    }
  }, []);

  return (
    <div className={Class}>
			<p ref={Subtext}>
				{subtext}
			</p>
		</div>
  );
};
