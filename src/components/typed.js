import React, { Component } from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'

export default class ReactTyped extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { strings } = this.props

    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <TypeWrap>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={el => {
            this.el = el
          }}
        />
      </TypeWrap>
    )
  }
}

const TypeWrap = styled.div`
  color: rgba(255, 0, 0, 0.8);
  font-size: 32px;
  line-height: 1.2;
  margin: 10px 0;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`
