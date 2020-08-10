import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import Menu from './Menu'
import Cards from './Cards'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const Users = ()=>{
  const [users, setUsers] = useState([])
  const columns = [
    { field: 'email', header: 'Email' },
    { field: 'firstname', header: 'Firstname' },
    { field: 'lastname', header: 'Lastname' },
  ]

  return (
    <div className="p-grid">
      <div className="p-col-2">
        <Menu />
      </div>
      <div className="p-col-10">
        <Card>
          <h2>Users</h2>
          <hr />
        </Card>
        <br/>
        <Card>
          <DataTable value={ users }>
            { columns.map((e, i)=>(
              <Column key={ i } field={ e.field } header={ e.header } />
            ))}
          </DataTable>
        </Card>
      </div>
    </div>
  )
}

export default Users
