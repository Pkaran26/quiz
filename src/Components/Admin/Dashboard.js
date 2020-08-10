import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { Chart } from 'primereact/chart'
import Menu from './Menu'
import Cards from './Cards'

const Dashboard = ()=>{
  const [statics, setStatics] = useState({
    categories: 0,
    questions: 0,
    quizes: 0,
    users: 0
  })

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#42A5F5',
        borderColor: '#42A5F5'
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: '#66BB6A',
        borderColor: '#66BB6A'
      }
    ]
  }

  return (
    <div className="p-grid">
      <div className="p-col-2">
        <Menu />
      </div>
      <div className="p-col-10">
        <Cards statics={ statics } />
        <br />
        <Card>
          <Chart type="line" data={data} />
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
