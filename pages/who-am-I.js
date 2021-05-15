import {useEffect, useState} from 'react'
import useRightLeftArrow from 'components/hooks/useRightLeftArrow'
import * as Slides from 'components/Slides'
// 🤑︎  ^^ Actually I am trying to mimic the mechanism nextjs use to render all pages at different routes by deafult, yo!!
const {log} = console
// log(Slides)

let SlideNames = Object.keys(Slides)
// log(SlideNames)
// log(SlideNames.length)

const LAST_SLIDE = SlideNames.length

export default function WhoAmI() {
	const [slideIndex, setSlideIndex] = useState()
	// log(slideIndex)

	const next = () => {
		// console.log('right arrow pressed..')
		if (slideIndex < LAST_SLIDE) {
			let nextslide = slideIndex + 1
			setSlideIndex(nextslide)
			// saveToLocalStorage(nextslide)
		}
	}

	const prev = () => {
		// console.log('left arrow pressed..')
		if (slideIndex > 1) setSlideIndex(slideIndex - 1)
	}

	useRightLeftArrow({next, prev})

	useEffect(() => {
		let backup = +localStorage.getItem('current_slide') || 1
		// log('got from local storage', backup)
		setSlideIndex(backup)
	}, [])

	useEffect(() => {
		localStorage.setItem('current_slide', slideIndex)
		// log('saved to localstorage', slideIndex)

		const slide = document.querySelector('.slide' + slideIndex)
		if (slide) {
			slide.style.display = 'block'
		}
		return () => {
			if (slide) slide.style.display = 'none'
		}
	})

	return (
		<div className='who-am-i-class'>
			<div className='board'>
				<section className='container column'>
					<div className=''>
						{SlideNames.map((Slide, index) => {
							const SlideComponent = Slides[Slide]
							return <SlideComponent name={index + 1} key={index} />
						})}
					</div>
				</section>
				<section className='nav-buttons row'>
					<button className='hands' onClick={prev}>
						👈🏻
					</button>
					<button
						onClick={() => {
							setSlideIndex(1)
						}}
					>
						<span className='emoji-small'>🏇︎</span>
					</button>

					<button className='hands' onClick={next}>
						👉🏻
					</button>
				</section>
			</div>

			<style jsx global>{`
				body {
					// height: 30vh;
					// ^^ this is causing overflow as seen from firefox inspector.
					padding: 0;
					margin: 0;
					background: rgb(50, 205, 50);
					color: #333;
					// this is lighter than black.
					// This is a valid comment though.
				}
			`}</style>
		</div>
	)
}
