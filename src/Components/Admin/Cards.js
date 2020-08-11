import React from 'react'
import { Card } from 'primereact/card'

const Cards = ({ statics })=>(
  <div className="p-grid">
    <div className="p-col-3">
      <Card style={{ background: '#007ad9' }}>
        <h2>Categories</h2>
        <h3>{ statics.categories }</h3>
      </Card>
    </div>
    <div className="p-col-3">
      <Card style={{ background: '#34A835' }}>
        <h2>Questions</h2>
        <h3>{ statics.questions }</h3>
      </Card>
    </div>
    <div className="p-col-3">
      <Card style={{ background: '#ffba01' }}>
        <h2>Quizes</h2>
        <h3>{ statics.quizes }</h3>
      </Card>
    </div>
    <div className="p-col-3">
      <Card style={{ background: '#e91224' }}>
        <h2>Users</h2>
        <h3>{ statics.users }</h3>
      </Card>
    </div>
  </div>
)

export default Cards
