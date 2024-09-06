import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger)

export const SubtextAnimation = ({ subtext, style }: { subtext: any, style: any }) => {

	const Class = classNames(style);

	const Subtext = useRef(null);


	useGSAP(() => {
		const text = Subtext.current
		const tl = gsap.timeline
		tl({
			scrollTrigger: {
				trigger: text,
				scrub: 1,
				start: 'top 200%'
			}
		}).fromTo(text, {
			y: 150
		}, {
			y: 0
		})
	})

	return (
		<div className={Class}>
			<p ref={Subtext}>
				{subtext}
			</p>
		</div>
	)
}
