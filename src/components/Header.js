import React from 'react'
import { useQuery } from '@apollo/client'
import { BROKER_QUERY } from '../queries'

const Header = () => {
  const { loading, error, data } = useQuery(BROKER_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)

  return (
    <>
      <h1>{data.mostRecentSnapshot.broker.name}</h1>
      <p>Website:</p>
      <p>broker@example.com</p>
      <p>Summary:</p>
      <p>{data.mostRecentSnapshot.broker.description}</p>
    </>
  )
}

export default Header