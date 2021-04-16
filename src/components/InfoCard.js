import React, { useState } from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'




const InfoCard = ({ data }) => {
  const labels = data.map(item => item.title)
  const dataPoints = data.map(item => item.premium)
  const percentages = data.map(item => item.proportion)


  const [ percent, setPercent ] = useState(`${percentages[0]}%`)
  const [ premium, setPremium ] = useState(`$${dataPoints[0]}`)

  defaults.global.legend.position = 'left'
  defaults.global.legend.labels.usePointStyle = true
 

  const chartData = {
    labels,
    datasets: [{
      data: dataPoints,
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#04e932'
      ]
    }]
  }

  const handleClick = (e, item) => {
    setPercent(`${percentages[item.index]}%`)
    setPremium(`$${dataPoints[item.index]}`)
  }

  return (
    <div style={{height: '45vh', width: '45vw'}}>      
      <Doughnut
        data={chartData}
        options={{
            legend: {
                onClick: (e, item) => handleClick(e, item)
          }
        }}
      />
      <span className='percentage'>{percent}</span>
      <span className='premium'>{premium} Total Premiums</span>

    </div>
  )
}

export default InfoCard