import React from 'react'
import InfoCard from './InfoCard'
import { useQuery } from '@apollo/client'
import { BROKER_CARRIER_SLICE_QUERY } from '../queries'
import './Dashboard.css'


const Dashboard = () => {
  const { loading, error, data } = useQuery(BROKER_CARRIER_SLICE_QUERY)

  if (loading) return <h1>Loading...</h1>
  if (error) console.log(error)

  return (
    <>
      <section className='dashboard'>
        {/* <View /> */}
        <section className='broker-section'>
          <h2>Broker Book</h2>
          <article className='info-card pr-range'>
            <h3>Premium Range</h3>
            <InfoCard data={data.mostRecentSnapshot.brokerSlice.premiumRange}/>
          </article>
          <article className='info-card'>
            <h3>Industries</h3>
            <InfoCard data={data.mostRecentSnapshot.brokerSlice.industries}/>
          </article>
        </section>
        <section className='carrier-section'>
          <h2>Carrier Placement</h2>
          <article className='info-card pr-range'>
            <h3>Premium Range</h3>
            <InfoCard data={data.mostRecentSnapshot.carrierSlice.premiumRange}/>
          </article>
          <article className='info-card'>
            <h3>Industries</h3>
            <InfoCard data={data.mostRecentSnapshot.carrierSlice.industries}/>
          </article>
        </section>
      </section>
      <div className='line'></div>
    </>
  )
}

export default Dashboard