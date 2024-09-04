import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames'
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger)

export function TextAnimation({ text, style }) {
	const TextAnimka = useRef(null)

	const textClass = classNames(styles.Animka, style);

	useGSAP(() => {
		const TextAnima = TextAnimka.current
		const tl = gsap.timeline
		tl({
			scrollTrigger: {
				trigger: TextAnima,
				scrub: 1,
				markers: true,
				start: 'top 70%'
			}
		}).fromTo(TextAnima, {
			backgroundPositionX: '100%'
    },
    {
			backgroundPositionX: '0%'
    })
	});

	return (
		<h2 className={textClass} ref={TextAnimka}>{ text }</h2>
	)
}
