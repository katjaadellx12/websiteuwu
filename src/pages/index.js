import React from 'react'
import { FaHeart, FaRegEnvelope, FaLinkedin } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import Wave from '../components/wave'
import ReactTyped from '../components/typed'
import SEO from '../components/seo'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Popup from '../components/popup'

// Type-checked Schema.org JSON-LD for React by Google: https://github.com/google/react-schemaorg

const IndexPage = () => (
  <div>
    <SEO
      title="Laine"
      description="A blazing fast website that I coded from scratch leveraging several frameworks like React to ensure a simple, yet elegant design."
      keywords="pranav, ambwani, pranav ambwani, Pranav Ambwani, Pranav, Ambwani, LG Electronics, LavaLab,USC, American Express, IBM, Product Management, Program Management, Technical Product Management, Product, product, management, software developer, software, developer, javascript, c++"
      image="https://i.imgur.com/ovGo1tx.png"
    />
    <Helmet>
      <link rel="canonical" href="https://pranav.tech" />
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "url": "https://hellbat.net/",
            "name": "Pranav Ambwani",
            "sameAs": [
              "https://www.facebook.com/ambwanipranav",
              "https://www.linkedin.com/in/pranavambwani/"
            ]
          }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://hellbat.net/",
            "name": "Pranav Ambwani"
          }
        `}
      </script>
    </Helmet>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Laine</h1>
        <ReactTyped
          strings={[
            'I am a leader.',
            'I am an innovator.',
            'I am a developer.',
          ]}
        />
        <p>
          Made with <FaHeart className="HeartIcon" /> in Los Angeles
        </p>

        <Popup />

        <div className="Logos">
          <a
            href="mailto:pranav@pranav.tech?Subject=Hi%20Pranav!"
            aria-label="link-to-email"
          >
            <FaRegEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/pranavambwani"
            target="_blank"
            rel="noreferrer"
            aria-label="link-to-linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/ambwani"
            target="_blank"
            rel="noreferrer"
            aria-label="link-to-github"
          >
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </div>
    <Wave />
  </div>
)

export default IndexPage

const Switch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px;
`
