import { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';

gsap.registerPlugin(ScrollTrigger)

export const SubtextAnimation = ({ subtext, style }: { subtext: any, style: any }) => {

	// for (let i = 0; i < subtext.length; i++) {
	// 	subtext[i].setAttribute('ref', 'Subtext');
	// };

	const Class = classNames(style);

	const Subtext = useRef(null);


	useGSAP(() => {
		const text = Subtext.current
		const tl = gsap.timeline
		tl({
			scrollTrigger: {
				trigger: text,
				scrub: 1,
				start: 'top 180%'
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
				{Array.isArray(subtext) ? subtext.map((line) => (
					<span>
						{line} <br />
					</span>
				)) : subtext}
			</p>
		</div>
	)
}
