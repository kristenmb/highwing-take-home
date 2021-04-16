import React from 'react'
import { useQuery } from '@apollo/client'
import { BROKER_QUERY } from '../queries'
import './Header.css'

const Header = () => {
  const { loading, error, data } = useQuery(BROKER_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)

  return (
    <header>
      <h1>{data.mostRecentSnapshot.broker.name}</h1>
      <div className='website'>
        <p>Website:</p>
        <p>broker@example.com</p>
      </div>
      <div className='summary'>
        <p>Summary:</p>
        <p>{data.mostRecentSnapshot.broker.description}</p>
      </div>
    </header>
  )
}

export default Header