module.exports = {
  pathPrefix: "/websiteuwu",
  siteMetadata: {
    title: 'Laine',
    description:
      'Welcome to the website that I coded from scratch leveraging several frameworks like React to ensure a simple, yet elegant design.',
    url: 'https://pranav.tech', // No trailing slash allowed!
    siteUrl: 'https://pranav.tech',
    keywords:
      'pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab, LavaLab USC, USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++, University of Southern California',
    image: 'icon.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            let path = edge.node.path
            let priority = 0.5
            if (path.match(/^\/$/)) {
              priority = 1.0
            } else if (path.match(/about/)) {
              priority = 0.8
            } else {
              priority = 0.1
            }
            console.log('priority: ', priority.toFixed(1), '    path: ', path)
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pranav.tech',
        sitemap: 'https://pranav.tech/sitemap.xml',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.REACT_APP_GA_TRACKING_ID,
        head: true,
      },
    },
  ],
}
