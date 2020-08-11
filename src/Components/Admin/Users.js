import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import Menu from './Menu'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SERVER_URL } from '../../config'
import axios from 'axios'

const Users = ()=>{
  const [users, setUsers] = useState([])
  const columns = [
    { field: 'email', header: 'Email' },
    { field: 'firstname', header: 'Firstname' },
    { field: 'lastname', header: 'Lastname' },
  ]

  useEffect(()=>{
    axios.get(`${ SERVER_URL }/user`)
    .then(res=>{
      if(res.data && res.data.data){
        setUsers(res.data.data)
      }
    })
    .catch(err=>{})
  }, [])

  return (
    <div className="p-grid">
      <div className="p-col-2">
        <Menu />
      </div>
      <div className="p-col-10">
        <Card style={{ height: '500px' }}>
          <h2>Users</h2>
          <hr />
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
