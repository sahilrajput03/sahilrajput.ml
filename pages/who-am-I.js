import { useEffect, useState } from 'react'
import useRightLeftArrow from '../components/hooks/useRightLeftArrow'
import * as Slides from '../components/Slides'
// 🤑︎  ^^ Actually I am trying to mimic the mechanism nextjs use to render all pages at different routes by deafult, yo!!
const { log } = console
log(Slides)

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

  useRightLeftArrow({ next, prev })

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
    <div className="who-am-i-class">
      <section className="board container ">
        {SlideNames.map((Slide, index) => {
          const SlideComponent = Slides[Slide]
          return <SlideComponent name={index + 1} key={index} />
        })}
      </section>
      <section className="nav-buttons container row">
        <button onClick={prev}>👈🏻</button>
        <button onClick={next}>👉🏻</button>
      </section>
    </div>
  )
}
