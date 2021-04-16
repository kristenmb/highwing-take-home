import React from 'react'
import InfoCard from './InfoCard'
import { useQuery } from '@apollo/client'
import { BROKER_CARRIER_SLICE_QUERY } from '../queries'


const Dashboard = () => {
  const { loading, error, data } = useQuery(BROKER_CARRIER_SLICE_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)

  return (
    <section className='dashboard'>
      {/* <View /> */}
      <section className='broker-section'>
        <h2>Broker Book</h2>
        <article>
          <h3>Premium Range</h3>
          <InfoCard data={data.mostRecentSnapshot.brokerSlice.premiumRange}/>
        </article>
        <article>
          <h3>Industries</h3>
          <InfoCard data={data.mostRecentSnapshot.brokerSlice.industries}/>
        </article>
      </section>
      <section className='carrier-section'>
        <h2>Carrier Placement</h2>
        <article>
          <h3>Premium Range</h3>
          <InfoCard data={data.mostRecentSnapshot.carrierSlice.premiumRange}/>
        </article>
        <article>
          <h3>Industries</h3>
          <InfoCard data={data.mostRecentSnapshot.carrierSlice.industries}/>
        </article>
      </section>
    </section>
  )
}

export default Dashboard