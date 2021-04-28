const path = require('path')
const { credits } = require('./files-credits')

module.exports = {
	siteMetadata: {
		title: 'Real Supply',
		description: `Project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@MiltonBolonha`,
		attrCredits: { credits },
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-offline`,
		// `gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `${__dirname}/static/assets/images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							name: `uploads`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 695,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-lazy-load`,
				],
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@AtomicBlock': path.resolve(__dirname, 'src/modules/atomic-block'),
					'@BlockBuilder': path.resolve(__dirname, 'src/modules/block-builder'),
					'@CQM': path.resolve(__dirname, 'src/modules/cqm'),
					'@Null': path.resolve(__dirname, 'src/modules/null'),
					'@Layout': path.resolve(__dirname, 'src/modules/layout'),
					'@tools': path.resolve(__dirname, 'src/tools'),
					'@styles': path.resolve(__dirname, 'src/styles'),
				},
				extensions: ['js', 'scss'],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `BolonhaDev`,
				short_name: `BolonhaDev`,
				start_url: `/`,
				background_color: `#040508`,
				theme_color: `#282a36`,
				display: `fullscreen`,
				icon: `${__dirname}/static/assets/images/real-supply-crown.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`IM Fell English`,
					`Cantata One`,
					`Oswald`,
					`Josefin Sans`,
					`Coda:800`,
				],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
	],
}

// {
//   resolve: 'gatsby-source-filesystem',
//   options: {
//     name: 'images',
//     path: './src/images/',
//   },
//   __key: 'images',
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `images`,
// 		path: `${__dirname}/static/assets`,
// 	},
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `uploads`,
// 		path: `${__dirname}/static/assets/images`,
// 	},
// },
// {
// 	resolve: `gatsby-source-filesystem`,
// 	options: {
// 		name: `posts`,
// 		path: `${__dirname}/posts`,
// 	},
// },
// {
// 	resolve: 'gatsby-plugin-mailchimp',
// 	options: {
// 		endpoint:
// 			'https://gmail.us4.list-manage.com/subscribe/post?u=f73925424e8a366f624728296&amp;id=222390269b', // string; add your MC list endpoint here; see instructions below
// 		timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
// 	},
// },
