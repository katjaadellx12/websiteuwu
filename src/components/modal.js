import React from 'react'
import './modal.css'

export default function Modal({ handleClose, show, imageSrc }) {
  const showHideClassName = show ? 'Modal DisplaBlock' : 'Modal DisplayNone'
  return (
    <div className={showHideClassName}>
      <button className="CloseModal" onClick={handleClose}>
        X
      </button>
      <img className="ImageContainer" src={imageSrc} />
    </div>
  )
}
