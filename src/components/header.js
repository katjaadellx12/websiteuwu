import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import ToggleDark from './toggle'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasUserScrolled: false,
    }
  }

  // As soon as the component loaded, listen to scroll events
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasUserScrolled: true })
    } else {
      this.setState({ hasUserScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={
          this.state.hasUserScrolled ? 'Header HeaderScrolled' : 'Header'
        }
      >
        <div className="HeaderGroup">
          <ToggleDark />
          <Link to="/" rel="noreferrer">
            Home
          </Link>
          <Link to="/about" rel="noreferrer">
            About
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
