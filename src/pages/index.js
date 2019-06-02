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
      title="laine, hellbat"
      description="THANK U DAVID ♥"
      keywords="laine, hellbat"
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
            "name": "laine g.",
            "sameAs": [
              "https://www.hellbat.net/",
              "https://www.hellbat.net//"
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
            "name": "laine g."
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
            href="mailto:xx"
            aria-label="link-to-email"
          >
            <FaRegEnvelope />
          </a>
          <a
            href="https://www.hellbat.net/"
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
