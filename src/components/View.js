import React from 'react'
import './View.css'

const View = () => {
  return (
    <div className='buttons'>
      <button className='btn'>Premium Range</button>
      <button disabled className='btn'>Markets</button>
      <button className='btn'>Industries</button>
      <button disabled className='btn'>Products</button>
    </div>
  )
}

export default View