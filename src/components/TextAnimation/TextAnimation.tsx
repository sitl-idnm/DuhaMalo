import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger)

export function TextAnimation({ text, style }) {
	const TextAnimka = useRef(null)

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
		<h2 className={`${styles.Animka}, ${style}`} ref={TextAnimka}>{ text }</h2>
	)
}
