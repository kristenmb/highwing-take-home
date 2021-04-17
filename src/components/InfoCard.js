import React, { useState } from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
import { doughnutlabel } from 'chartjs-plugin-doughnutlabel'
import './InfoCard.css'

const InfoCard = ({ data }) => {
  const labels = data.map(item => item.title)
  const dataPoints = data.map(item => item.premium.toFixed())
  const percentages = data.map(item => item.proportion.toFixed())

  const [ percent, setPercent ] = useState(`${percentages[0]}%`)
  const [ premium, setPremium ] = useState(`$${dataPoints[0]}`)

  defaults.global.legend.position = 'left'
  defaults.global.legend.labels.usePointStyle = true

  const chartData = {
    labels,
    datasets: [{
      data: dataPoints,
      backgroundColor: [
      '#003D40',
      '#00CE5F',
      '#00E834',
      '#00E9CB'
      ]
    }]
  }

  const handleClick = (e, item) => {
    setPercent(`${percentages[item.index]}%`)
    setPremium(`$${dataPoints[item.index]}`)
  }

  return (
    <>
      <div className='info-card' style={{height: '25vh', width: '35vw'}}>      
        <Doughnut
          data={chartData}
          options={{
            cutoutPercentage: 80,
            legend: {
              onClick: (e, item) => handleClick(e, item),
              afterFit: () => this.width = this.width + 50
            },
            plugins: {
              doughnutlabel: {
                labels: [
                  {
                    text: `${percent}`,
                    font: {
                      family: 'Barlow, sans-serif',
                      size: '48',
                    }
                  }],
                  color: 'black',
                  width: 90
                }
              }
          }}
        />
      </div>
      <div className='premium-wrapper'>
        <p className='premium'>{premium}</p>
        <p className='total'>Total Premiums</p>
      </div>
    </>
  )
}

export default InfoCard