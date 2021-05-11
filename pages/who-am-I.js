import { useEffect, useState } from 'react'
import useRightLeftArrow from '../components/hooks/useRightLeftArrow'

const { log } = console
const LAST_SLIDE = 100 // ! fix this in end..

const saveToLocalStorage = (slide) => {
  log('saved to local storage...', slide)
  localStorage.setItem('current_slide', slide)
}

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
        {/* <h1>Hello, from nextjs, yo!!</h1> */}
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        {/* <Slide5 /> */}
        {/* <Slide6 /> */}
        {/* <Slide7 /> */}
        {/* <Slide8 /> */}
        {/* <Slide9 /> */}
        {/* <Slide10 /> */}
        {/* <Slide11 /> */}
        {/* <Slide12 /> */}
        {/* <Slide13 /> */}
        {/* <Slide14 /> */}
        {/* <Slide15 /> */}
        {/* <Slide16 /> */}
        {/* <Slide17 /> */}
        {/* <Slide18 /> */}
        {/* <Slide19 /> */}
        {/* <Slide20 /> */}
        {/* <Slide21 /> */}
        {/* <Slide22 /> */}
        {/* <Slide23 /> */}
        {/* <Slide24 /> */}
        {/* <Slide25 /> */}
        {/* <Slide26 /> */}
        {/* <Slide27 /> */}
        {/* <Slide28 /> */}
        {/* <Slide29 /> */}
      </section>
      <section className="nav-buttons container row">
        <button onClick={prev}>👈🏻</button>
        <button onClick={next}>👉🏻</button>
      </section>
    </div>
  )
}

const SlideTemplate = ({ children, name }) => {
  // alert(children)
  return (
    <div style={{ display: 'none' }} className={'slide' + name}>
      <div className="slide">{children}</div>
    </div>
  )
}

const Slide1 = () => (
  <SlideTemplate name="1">
    <h1>
      HELLO.. <span className="person-img">🖐🏻</span>
      <br />
      Good evening to everyone here !
    </h1>
  </SlideTemplate>
)

const Slide2 = () => (
  <SlideTemplate name="2">
    <h1>Sahil Rajput</h1>
  </SlideTemplate>
)

const Slide3 = () => (
  <SlideTemplate name="3">
    <h1>Lorem ipsum dolor sit amet. </h1>
  </SlideTemplate>
)

const Slide4 = () => (
  <SlideTemplate name="4">
    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
  </SlideTemplate>
)
