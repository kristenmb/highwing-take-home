import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const InfoCard = ({ data }) => {
  const labels = data.map(item => item.title)
  const dataPoints = data.map(item => item.premium)

  const chartData = {
    labels,
    datasets: [{
      data: dataPoints,
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#b3b3b3'
      ]
    }]
  }

  return (
    <div style={{height: '45vh', width: '45vw'}}>      
      <Doughnut
        data={chartData}
      />
    </div>
  )
}

export default InfoCard