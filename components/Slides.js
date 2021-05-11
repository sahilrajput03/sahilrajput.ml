// 🛑︎ You are not supposed to export this as that is not what you want.
const SlideTemplate = ({ children, name }) => {
  // alert(children)
  return (
    <div style={{ display: 'none' }} className={'slide' + name}>
      <div className="slide">{children}</div>
      <div className="slide-number">Slide no. {name}</div>
    </div>
  )
}
// ? 🤠︎ Export names have now no meaning, you may rename exports as Shit
// ? or Pit or as you like to call them, but make sure you give them name
// ? property so we can hide / show it accordingly at required place.

export const GoodEvening = () => (
  <SlideTemplate name="1">
    <h1>
      HELLO.. <span className="person-img">🖐🏻</span>
      <br />
      Good evening to everyone here !
    </h1>
  </SlideTemplate>
)

export const NameAndProfileLinks = () => (
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

export const WhatCompaniesThinkAboutMe = () => (
  <SlideTemplate name="5">
    <img
      className="img001"
      src={'/images/who-am-i/free-1.gif'}
      height={500}
      width="200"
      alt="I am free image here..."
    />
    <dev className="spacer1"></dev>
    <h1>
      And THAT IS WHAT MOST <i>companies</i> HR's think about ME when I explain
      something like..., "In the last two 2 years, I was doing software
      development at 🐥︎home."
      <div className="spacer1"></div>
      <div className="spacer1"></div>
    </h1>
  </SlideTemplate>
)

export const WhatIdoActually = () => {
  return (
    <SlideTemplate name="3">
      <h1>What do I do 🤐︎ ?</h1>
    </SlideTemplate>
  )
}

export const Slide5 = () => (
  <SlideTemplate name="4">
    <span className="emoji-medium">🤠︎</span>
    <h1>Surprisingly there's a fun thing in that !</h1>
  </SlideTemplate>
)

export const Slide6 = () => (
  <SlideTemplate name="7">
    <h1>
      That wasn't a joke and its always a FUN 🙂︎ THING to me, that I get a
      opportunity to explain all the things I have learned in past 2 years
      🧸EVERY TIME.
    </h1>
  </SlideTemplate>
)

export const Slide7 = () => (
  <SlideTemplate name="8">
    <h1>So, lets get started with exactly 'what I do ?' ..</h1>
    <span className="emoji-medium">🚀︎🚀︎ 👨🏼‍🚀︎</span>
  </SlideTemplate>
)

export const Slide8 = () => (
  <SlideTemplate name="9">
    <h1>I like SOFTWARE DEVELOPMENT more than anything I like to do ...</h1>
    <div className="spacer1" />
    <h2>
      Yup, you guessed 🤔︎ it right, its my <i>passion</i>.
      <br />
      <br />
      TWEAKING softwares, EXPLORE technologies, make new softwares and CONFIGURE
      my linux.
      <br />
      <div className="spacer1" />
      <div className="spacer1" />
      <div className="spacer1" />
      <div className="spacer1" />
      These days I use <i>PopOS+i3wm</i> 💓︎ as OS in my system.
    </h2>
  </SlideTemplate>
)

export const Slide9 = () => (
  <SlideTemplate name="10">
    <h1>
      I am a fullstack developer in javascript having proficient level skills in
      MERN stack.
    </h1>
    <h2>Other things -</h2>
    <ul>
      <li>
        <strong>GraphQl Servers and client softwares</strong> like ``Apollo
        Client``, ``graphql-request`` (minimal+concise). Also, running multipel
        conquerrent graphql servers with ``nextjs``. If I get to say benefit of
        graphql is one line, I would say its that we can query any amound of
        query in one trip, else with rest we all lots of round trips for same
        thing and with graphql we only get what data we want, no 💩︎ at all.
      </li>
      <br />
      <li>
        <strong>ReactQuery</strong> - A powerful library that exposes all the
        apis that any modern commercial application requires like pagination,
        and cache management, and state management. Do read{' '}
        <a href="https://react-query.tanstack.com/overview">this docs page</a>
        and thanks to{' '}
        <a target="_blank" href="https://twitter.com/tannerlinsley">
          Tanner Linsley
        </a>{' '}
        for maintaining it as OSS.
      </li>
      <br />
      <li>
        <strong>Next.js</strong> - An amazing framework for react that no other
        framework could ever reach to the level of simplicity this OSS has
        reached. A huge thanks to{' '}
        <a target="_blannk" href="https://twitter.com/rauchg">
          Guillermo Rauch
        </a>{' '}
        and his team. I have been so mad about the foundational techonology they
        are building upon, that I have my own copy of their example repos at my
        personal{' '}
        <a href="https://github.com/sahilrajput03/testing-nextjs-examples">
          github repo
        </a>{' '}
        for its usage testing and tweaks for general use cases.
        <br />
        <i>
          Literally I can talk about 30 mins for nextjs alone and explaining all
          the techincal specs that I have come across of this OSS.
        </i>
      </li>
    </ul>
  </SlideTemplate>
)

export const Slide10 = () => (
  <SlideTemplate name="11">
    <ul>
      <li>
        <strong>Express.js</strong> - No matter how cool things are with ``graph
        technology```, its always the <i>most intutive way</i> to deal with data
        with REST, so I use express. <b>BUT</b>, with <b>nextjs api's</b> I
        forget about my memories of express.js. No offend PLEASE! Working with{' '}
        <b>Next.js</b>🔥︎ seems so natural as we can reap the benefits of
        simplistic serverless functions with just js only.
      </li>
      <br />
      <li>
        <b>Mongo db</b> - No doubt it is the most easy to start db interface
        anybody could ever start with. One of key reasons is that mongodb allows
        having free accounts for its users as most of us use it.
        <br />
      </li>
      <br />
      <br />
      <li>
        <b>Redis</b> - An efficient in memory database with along with data
        persistent abilities. Its the best cache solution anyone can think of
        ATM I guess. <br /> Developing with redis is so easy that its hard to
        understand at first how we supposed to use redis with key-value pairs
        with string values only. I am <b>AWARE</b> that redis supports other{' '}
        <a target="_blank" href="https://redis.io/topics/data-types">
          complex types
        </a>{' '}
        but string is what we want 99% of time.
      </li>
      <li></li>
      <li></li>
    </ul>
  </SlideTemplate>
)

export const Slide11 = () => (
  <SlideTemplate name="6">
    <h1>#Me</h1>
    <img
      className="img001"
      src={'/images/who-am-i/what-i-do-actually.gif'}
      height={500}
      width="200"
      alt="I am free image here..."
    />
    <div className="spacer1"></div>
    <div className="spacer1"></div>
    <img
      className="img001"
      src={'/images/who-am-i/eat-code-sleep.gif'}
      height={500}
      width="200"
      alt="I am free image here..."
    />
  </SlideTemplate>
)

// export const Slide12 = () => (
//   <SlideTemplate name="12">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )

// export const Slide13 = () => (
//   <SlideTemplate name="13">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )

// export const Slide14 = () => (
//   <SlideTemplate name="14">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )

// export const Slide15 = () => (
//   <SlideTemplate name="15">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )
// export const Slide16 = () => (
//   <SlideTemplate name="16">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )
// export const Slide17 = () => (
//   <SlideTemplate name="5">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )
// export const Slide18 = () => (
//   <SlideTemplate name="17">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )
// export const Slide19 = () => (
//   <SlideTemplate name="18">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )

// export const Slide20 = () => (
//   <SlideTemplate name="19">
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )

// 🛑︎ You are not supposed to export this as that is not what you want.
const Slidebackup = () => (
  <SlideTemplate name="20">
    <h1>Lorem ipsum</h1>
  </SlideTemplate>
)
