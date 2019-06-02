import React, { Component } from 'react'
import Modal from './modal'
import styled from 'styled-components'
import resume from '../images/Resume.svg'

export default class Popup extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          imageSrc={resume}
        />
        <button type="button" onClick={this.showModal}>
          Résumé
        </button>
      </div>
    )
  }
}

const Text = styled.p`
  color: black;
  font-size: 30px;
`
