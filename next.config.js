const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = {
	...withNextra(),
	async redirects() {
		return [
			{
				source: '/discord',
				destination: 'https://discord.gg/Ahnc32dxzd',
				permanent: true,
			},
		]
	},
}

// const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
// let e = withNextra.images()
// e.images = {
//   domains: ['assets.vercel.com']
// }
// module.exports = e
