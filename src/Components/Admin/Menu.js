import React from 'react'
import { Card } from 'primereact/card'
import { NavLink } from 'react-router-dom'

const Menu = ()=>(
  <Card style={{ height: '500px' }}>
    <NavLink className="p-button p-component p-button-warning p-button-text-only" to="/admin/dashboard">
      <h2 className="p-button-text p-c">Dashboard</h2>
    </NavLink>
    <hr />
    <ul className="v-manu">
      <li>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/admin/questions">Questions</NavLink>
      </li>
      <li>
        <NavLink to="/admin/quiz">Quiz</NavLink>
      </li>
      <li>
        <NavLink to="/admin/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/admin/logout">Logout</NavLink>
      </li>
    </ul>
  </Card>
)

export default Menu
