import React from 'react'
import InfoCard from './InfoCard'
import { useQuery } from '@apollo/client'
import { BROKER_CARRIER_SLICE_QUERY } from '../queries'


const Dashboard = () => {
  const { loading, error, data } = useQuery(BROKER_CARRIER_SLICE_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)


  return (
    <>
      <h1>Dashboard</h1>
      <section>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    </>
  )
}

export default Dashboard