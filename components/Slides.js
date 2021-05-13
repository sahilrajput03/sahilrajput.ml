// 🛑︎ You are not supposed to export this as that is not what you want.
const SlideTemplate = ({children, name}) => {
	// alert(children)
	return (
		<div style={{display: 'none'}} className={'slide' + name}>
			<div className='slide'>{children}</div>
			<div className='slide-number'>Slide no. {name}</div>
		</div>
	)
}

// ? 🤠︎ Export names have now no meaning, you may rename exports as Shit
// ? or Pit or as you like to call them, but make sure you give them name
// ? property so we can hide / show it accordingly at required place.

export const GoodEvening = ({name}) => (
	<SlideTemplate name={name}>
		<h1>
			HELLO.. <span className='person-img'>🖐🏻</span>
			<br />
			Good evening to everyone here !
		</h1>
	</SlideTemplate>
)

export const NameAndProfileLinks = ({name}) => (
	<SlideTemplate name={name}>
		<h2>I am</h2>
		<h1>Sahil Rajput</h1>
		<div>
			<h2>
				How can you find me <span className='emoji-medium'>🧐︎</span> ?
			</h2>
			<ul className='right-align'>
				<li>
					Blog: <a href='/'>www.sahilrajput.ml</a>
				</li>
				<li>
					Github:{' '}
					<a target='_blank' href='https://github.com/sahilrajput03'>
						@sahilrajput03
					</a>
				</li>
				<li>
					Twitter:{' '}
					<a target='_blank' href='https://twitter.com/freakstrrocks'>
						@freakstarrocks
					</a>
				</li>
				<li>
					Discord: <a href='#'>@sahilrajput03#4631</a>
				</li>
				<li>
					Discord Server:{' '}
					<a target='_blank' href='https://discord.gg/Ahnc32dxzd'>
						sahilrajput.ml
					</a>
				</li>
			</ul>
			<div className='spacer1' />
			<div className='row footer'>
				<span className='emoji-very-small'>🦑︎</span>
				<label htmlFor=''>
					<strong>Tip</strong> : Use above links to join me over there.
				</label>
			</div>
		</div>
	</SlideTemplate>
)

export const WhatIlookLike = ({name}) => (
	<SlideTemplate name={name}>
		<h1>This is me.</h1>
		<img
			className='img002'
			src={'/images/who-am-i/ProfilePicFullSize-low-size.JPG'}
			alt='my full size photo here..'
		/>
	</SlideTemplate>
)

export const ButWhatdoIdo = ({name}) => (
	<SlideTemplate name={name}>
		<h1>So, lets get started with exactly 'what I do ?' ..</h1>
		<span className='emoji-medium'>🚀︎🚀︎ 👨🏼‍🚀︎</span>
	</SlideTemplate>
)

export const WhatCompaniesThinkAboutMe = ({name}) => (
	<SlideTemplate name={name}>
		<img
			className='img001'
			src={'/images/who-am-i/free-1.gif'}
			// height={500}
			// width="200"
			//  these ^^ 🛑︎ doesn't work though.
			alt='I-am-free-image here...'
		/>
		<dev className='spacer1'></dev>
		<h1>
			THATS WHAT HR's of MOST <i>companies</i> think about ME when I explain
			something like..., "In the last two 2 years, I was doing software
			development at 🐥︎home."
		</h1>
	</SlideTemplate>
)

export const WhatIactuallyDo = ({name}) => (
	<SlideTemplate name={name}>
		<h1>#Me</h1>
		<div className='row'>
			<img
				className='img003'
				src={'/images/who-am-i/what-i-do-actually.gif'}
				alt='I am free image here...'
			/>
			<div className='spacer1-horizontal'></div>
			<img
				className='img004'
				src={'/images/who-am-i/eat-code-sleep.gif'}
				alt='I am free image here...'
			/>
		</div>
	</SlideTemplate>
)

export const ItsPassion = ({name}) => (
	<SlideTemplate name={name}>
		<h1>I like SOFTWARE DEVELOPMENT more than anything I like to do ...</h1>
		<div className='spacer1' />
		<h3>
			Yup, you guessed 🤔︎ it right, its my <i>passion</i>.
			<br />
			<br />
			TWEAKING softwares, EXPLORE technologies, make new softwares and CONFIGURE
			my linux.
			<br />
			<div className='spacer1' />
			<div className='spacer1' />
			These days I use <i>PopOS+i3wm</i> 💓︎ as OS in my system.
		</h3>
	</SlideTemplate>
)

export const IamFullStackDev = ({name}) => (
	<SlideTemplate name={name}>
		<h1>
			I am a fullstack developer <span className='emoji-medium'>🥇︎</span> in
			javascript having proficient level skills in MERN stack.
		</h1>
	</SlideTemplate>
)

export const CommentsOnSoftwaresIuse = ({name}) => (
	// They all are same thing i.e., helps you build quality softwares ASAP.
	// SO LETS DIVE INTO THE TOOLS I HAVE USED AND MY THOROUGH THOUGHS ON SOME OF THEM.
	<SlideTemplate name={name}>
		<h2>
			Software tools, packages, libraries, frameworks and what not ?
			<br />
			<span className='emoji-large'>🏊︎‍</span>
		</h2>
	</SlideTemplate>
)

export const WhatElse = ({name}) => (
	// 🙏︎ Do expalain that you are a 🤺︎🤺︎ enthuiastic learned.
	// 🔥︎ backend technologies I am comfortable with.
	<SlideTemplate name={name}>
		<h2>Backend</h2>
		<div className='spacer1'></div>
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
				<strong>Express.js</strong> - No matter how cool things are with ``graph
				technology```, its always the <i>most intutive way</i> to deal with data
				with REST, so I use express. <b>BUT</b>, with <b>nextjs api's</b> I
				forget my memories of express.js literally.{' '}
				<i>
					<b>No offend PLEASE!</b>
				</i>{' '}
				Working with <b>Next.js</b>🔥︎ seems so natural ......, as we can reap
				the benefits of simplistic serverless functions with just js only.
			</li>
			<br />
		</ul>
	</SlideTemplate>
)

export const NextJs = ({name}) => (
	// 📢︎ : It renders server rendered pages which are cacheble by cdn's and thats so good and which is exactly users of react gets to complaint all the time.
	// 📢︎ : Not just that, nextjs powers the backend solution in itself out of the box, so does than means we no longer need to setup an express app for a project isn't that cool..?
	<SlideTemplate name={name}>
		<ul>
			<li>
				<span className='emoji-medium'>🎁︎</span>
				<br />
				<strong>Next.js</strong> - An amazing OSS 😮︎ framework for react that
				no other framework could ever reach to the level of simplicity this OSS
				has reached. A huge thanks to{' '}
				<a target='_blannk' href='https://twitter.com/rauchg'>
					Guillermo Rauch
				</a>{' '}
				and his team.
				<br />
				There are tons of features that next.js offers but some key features
				are:
				<br />
				<br />
				- Unique configurability i.e., You may use .babelrc directly by creating
				.babelrc file in root of project.
				<br />- Inbuilt Routing (Both static(with <i>page1.js, page2.js</i>) and{' '}
				<a href='https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing'>
					dynamic
				</a>
				)
				<br />
				- Serverless functions to suport needs of your frontned pages.
				<br />
				<br />I have been so mad about the foundational techonology they are
				building upon, that I have my own copy of their example repos at my
				personal{' '}
				<a href='https://github.com/sahilrajput03/testing-nextjs-examples'>
					github repo
				</a>{' '}
				for its usage testing and tweaks for general use cases.
				<br />
				<i>
					Literally I can talk about 30 mins for nextjs alone and explaining all
					the techincal specs that I have come across of this OSS.
				</i>
				<br />
				<br />
				If you are a deveoper in <i>JS</i>, I would recommend to look at the
				examples folder in Next.js's{' '}
				<a href='https://github.com/vercel/next.js'>github repository</a>.
			</li>
			<br />
			<li>
				FYI: I made this slidshow using Next.js as well.
				<br /> See the code of current{' '}
				<a
					target='_blank'
					href='https://github.com/sahilrajput03/sahilrajput.ml/blob/master/pages/who-am-I.js'
				>
					<i>Page</i>{' '}
				</a>{' '}
				in my source code of this website at{' '}
				<a
					target='_blank'
					href='https://github.com/sahilrajput03/sahilrajput.ml'
				>
					github.com/sahilrajput03/sahilrajput.ml
				</a>
				<br />
				<br />
				FYI: React docs at <i>reactjs.org</i> recommends nextjs solution as the
				best 🦁︎ in class solution presently.
			</li>
			<br />
		</ul>
	</SlideTemplate>
)

export const HowGoodIamWithNextJs = ({name}) => (
	<SlideTemplate name={name}>
		<h1>Enought of talking about Next.Js</h1>
		Check out my <i>testing-nextjs-examples</i> repository at{' '}
		<a
			target='_blank'
			href='https://github.com/sahilrajput03/testing-nextjs-examples'
		>
			github.com/sahilrajput03/testing-nextjs-examples
		</a>
	</SlideTemplate>
)

export const MongoPostgresRedis = ({name}) => (
	// 🙏︎ HERE ARE SOME OF MY db choices.
	// 📢︎ : wonderful, simple, flexible, pretty well.
	<SlideTemplate name={name}>
		<h2>DATABASES</h2>
		<ul>
			<li>
				<b>Mongo db</b> - No doubt it is the easiest to start db interface
				anybody with <i>JS</i> proficiency could ever start with. One of key
				reasons is that mongodb allows having free accounts for its users as
				most of us use it.
				<br />
			</li>
			<br />
			<li>
				<b>Postgres db</b> - This database with its unique peformance and SQL
				nature makes it my second choice out of dbs. Haven't made any full
				fledged full-stack with PostgreSQL yet, but I{' '}
				<a
					target='_blank'
					href='https://github.com/sahilrajput03/learning_postgresql_sequelize'
				>
					have been testing
				</a>{' '}
				with postgres and read its documentation and so far so good🧐︎.
			</li>

			<br />
			<li>
				<b>Redis</b> - An efficient in memory database with along with data
				persistent abilities. Its the{' '}
				<b>
					<i>best cache solution</i>
				</b>{' '}
				anyone can think of ATM I guess. <br /> Developing with redis is so easy
				that its hard to understand at first how we supposed to use redis with
				key-value pairs with string values only. I am <b>AWARE</b> that redis
				supports other{' '}
				<a target='_blank' href='https://redis.io/topics/data-types'>
					complex types
				</a>{' '}
				but string is what we want 99% of time as we are supposed to use
				JSON.stringify and JSON.parse for encodable data needs, it works so{' '}
				<i>SMOOTH</i>.
			</li>
		</ul>
	</SlideTemplate>
)

export const SlideStarter = ({name}) => (
	<SlideTemplate name={name}>
		<h1>Single Page Applications</h1>
		<div>
			Status : <span className='emoji-medium'>🔥︎</span>
		</div>
	</SlideTemplate>
)

export const FrontEndFrameworks = ({name}) => (
	// 📢︎ Spend atleast 2 minutes here
	<SlideTemplate name={name}>
		<h1>React and React Native</h1>
	</SlideTemplate>
)

export const FrontendThings = ({name}) => (
	// I use codesandboxes for testing all the softwares..
	// 📢︎ ReactQuery ?? Why is it awesome..!!
	// 📢︎ SWR(a fetching library by nextjs) stands for `Stale while revalidate` a HTTP cache invalidation strategy popularized by HTTP RFC 5861.
	<SlideTemplate name={name}>
		<h1>Frontend utils</h1>
		<ul>
			<li>
				<strong>ReactQuery</strong> - A powerful library that exposes all the
				apis that any modern commercial application requires like pagination,
				and cache management, and state management. Do read{' '}
				<a href='https://react-query.tanstack.com/overview'>this docs page</a>
				and thanks to{' '}
				<a target='_blank' href='https://twitter.com/tannerlinsley'>
					Tanner Linsley{' '}
				</a>{' '}
				for maintaining it as OSS.{' '}
			</li>
			<br />
			<li>
				<b>SWR</b> - An amazinng data fetching solutions which is simplest in
				nautre as compared to other solutions. Testing SWR and experimenting
				with SWR makes me think why isn't this bundled with react itself for
				fetching.
			</li>
			<li></li>
		</ul>
	</SlideTemplate>
)

export const Docker = ({name}) => (
	<SlideTemplate name={name}>
		<h1>Docker</h1>
		<span className='emoji-large'>🚢︎</span>
	</SlideTemplate>
)

export const ThanksSlide = ({name}) => (
	<SlideTemplate name={name}>
		<h1>Thanks.</h1>
		<div className='spacer1'></div>
		<div className='spacer1'></div>
		<span>I had less ⏲︎ time to make this.</span>
		<dev className='spacer1'></dev>
		<dev className='spacer1'></dev>
		<dev className='spacer1'></dev>
		<h3> Hope you enjoyed it 🙂︎.</h3>
	</SlideTemplate>
)

// 🛑︎ You are not supposed to export this as that is not what you want.
// You may use 🙂︎ snippet from your ``my_bin/snips`` too, its just copy of below component.
// export const SlideStarter = ({ name }) => (
//   <SlideTemplate name={name}>
//     <h1>Lorem ipsum</h1>
//   </SlideTemplate>
// )
