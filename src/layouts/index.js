import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import icon from '../images/icon.jpg'
import Header from '../components/header'
import './index.css'
import SEO from '../components/seo'

const Layout = ({ children, data }) => (
  <div>
    <SEO
      title="Pranav | Home"
      description="Check out the website that I coded from scratch leveraging several frameworks to ensure a simple, yet elegant design."
      keywords="pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab,USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++"
      image="https://i.imgur.com/ovGo1tx.png"
    />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'image', content: data.site.siteMetadata.image },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
        { rel: 'icon', type: 'image/jpg', href: `${icon}` },
      ]}
    />
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        image
      }
    }
  }
`
