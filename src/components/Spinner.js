import React from 'react'
import './css_pages/Spinner.css'

export const Spinner = ({ text = '' }) => {
  const header = text ? <h4>{text}</h4> : null
  return (
    <div className="spinner">
      {header}
      <div className="loader"  />
    </div>
  )
}
