import { useState } from 'react'
import cssStyles from './BaseButton.module.scss'

const BaseButton = ({ styles, onClick, children, show }) => {
  // console.log(props)
  return (
    <button
      onClick={() => {
        onClick()
      }}
      className={(cssStyles['base-button'], styles)}
    >
      {children}
    </button>
  )
}
export default BaseButton
