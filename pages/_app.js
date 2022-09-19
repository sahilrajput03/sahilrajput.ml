import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import '../styles/line-highlight.css' // Yo!!
import Giscus from '@giscus/react'

import '../styles/main.css'
import '../styles/who-am-i.scss'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import ClientOnly from 'components/ClientOnly'

export default function Nextra({Component, pageProps}) {
	// const router = useRouter()

	// useEffect(() => {
	// 	alert(router.asPath) // prints the `location.pathname` yikes!
	// }, [])

	return (
		<>
			<Head>
				<link
					rel='alternate'
					type='application/rss+xml'
					title='RSS'
					href='/feed.xml'
				/>
				<link
					rel='preload'
					href='/fonts/Inter-roman.latin.var.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
