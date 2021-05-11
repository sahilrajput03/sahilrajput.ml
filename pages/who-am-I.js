import { useEffect, useState } from 'react'
import useRightLeftArrow from '../components/hooks/useRightLeftArrow'
// import IamFree from '../images/who-am-i/free-1.gif'

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
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
        <Slide15 />
        <Slide16 />
        <Slide17 />
        <Slide18 />
        <Slide19 />
        <Slide20 />
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
      <div className="slide-number">Slide no. {name}</div>
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
    <h2>I am</h2>
    <h1>Sahil Rajput</h1>
    <div>
      <h2>
        How can you find me <span className="emoji-medium">🧐︎</span> ?
      </h2>
      <ul className="right-align">
        <li>
          Github:{' '}
          <a target="_blank" href="https://github.com/sahilrajput03">
            @sahilrajput03
          </a>
        </li>
        <li>
          Twitter:{' '}
          <a target="_blank" href="https://twitter.com/freakstrrocks">
            @freakstarrocks
          </a>
        </li>
        <li>
          Discord: <a href="#">@sahilrajput03#4631</a>
        </li>
        <li>
          Discord Server:{' '}
          <a target="_blank" href="https://discord.gg/Ahnc32dxzd">
            sahilrajput.ml
          </a>
        </li>
      </ul>
      <div className="spacer1" />
      <div className="row footer">
        <span className="emoji-very-small">🦑︎</span>
        <label htmlFor="">
          <strong>Tip</strong> : Use above links to join me over there.
        </label>
      </div>
    </div>
  </SlideTemplate>
)

const Slide4 = () => (
  <SlideTemplate name="4">
    <h1>
      What exactly <i>companies</i> think when I respond to HR's like..., "In
      the last two 2 years, I was doing software development at 🐥︎home."
      <div className="spacer1"></div>
      <div className="spacer1"></div>
    </h1>
    <img
      className="img001"
      src={'/images/who-am-i/free-1.gif'}
      height={500}
      width="200"
      alt="I am free image here..."
    />
  </SlideTemplate>
)

const Slide3 = () => {
  return (
    <SlideTemplate name="3">
      <h1>What do I do 🤐︎ ?</h1>
    </SlideTemplate>
  )
}

const Slide5 = () => (
  <SlideTemplate name="5">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide6 = () => (
  <SlideTemplate name="6">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide7 = () => (
  <SlideTemplate name="7">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide8 = () => (
  <SlideTemplate name="8">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide9 = () => (
  <SlideTemplate name="9">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide10 = () => (
  <SlideTemplate name="10">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide11 = () => (
  <SlideTemplate name="11">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide12 = () => (
  <SlideTemplate name="12">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide13 = () => (
  <SlideTemplate name="13">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide14 = () => (
  <SlideTemplate name="14">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide15 = () => (
  <SlideTemplate name="15">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
const Slide16 = () => (
  <SlideTemplate name="16">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
const Slide17 = () => (
  <SlideTemplate name="5">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
const Slide18 = () => (
  <SlideTemplate name="17">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
const Slide19 = () => (
  <SlideTemplate name="18">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slide20 = () => (
  <SlideTemplate name="19">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)

const Slidebackup = () => (
  <SlideTemplate name="20">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
