import React from 'react'
import { useQuery } from '@apollo/client'
import { BROKER_QUERY } from '../queries'
import arrow from '../Back arrow.svg'
import bell from '../bell-icon.png'
import './Header.css'

const Header = () => {
  const { loading, error, data } = useQuery(BROKER_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)

  return (
    <header>
      <div className='top-nav'>
        <img className='arrow' src={arrow} alt='Back arrow'/>
        <div className='right-top'>
          <p className='name'>Elwin Sharvill</p>
          <p className='name-short'>ES</p>
          <img className='bell' src={bell} alt='Notification bell'/>
        </div>
      </div>
      <h1>{data.mostRecentSnapshot.broker.name}</h1>
      <div className='website'>
        <p className='label'>Website:</p>
        <p>broker@example.com</p>
      </div>
      <div className='summary'>
        <p className='label'>Summary:</p>
        <p>{data.mostRecentSnapshot.broker.description}</p>
      </div>
    </header>
  )
}

export default Header