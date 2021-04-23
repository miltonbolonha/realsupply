const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Autismo Tech Alert',
		description: `Project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@MiltonBolonha`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		// {
		//   resolve: 'gatsby-source-filesystem',
		//   options: {
		//     name: 'images',
		//     path: './src/images/',
		//   },
		//   __key: 'images',
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/assets`,
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
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`,
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
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://gmail.us4.list-manage.com/subscribe/post?u=f73925424e8a366f624728296&amp;id=222390269b', // string; add your MC list endpoint here; see instructions below
				timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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
