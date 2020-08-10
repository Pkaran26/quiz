import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const Profile = ({ match, history })=>{
  const [profile, setProfile] = useState({
    _id: '', email: '', firstname: '', lastname: ''
  })
  const [categories, setCategories]  = useState([])
  const [currentategory, setCurrentCategory]  = useState('')
  const [quizes, setQuizes]  = useState([])

  useEffect(()=>{
    try {
      let user = localStorage.getItem('user')
      user = JSON.parse(user)
      setProfile({
        _id: user._id, email: user.email, firstname: user.firstname, lastname: user.lastname
      })
    } catch (e) {
      alert('no data found!')
      history.push('/')
    }
  }, [])

  return (
    <div className="p-grid">
      <div className="p-col-4">
        <Card>
          <h3>Profile</h3>
          <hr/>
          <table className="profile_table">
            <tbody>
              <tr>
                <td>Email</td>
                <td>: </td>
                <td>{ profile.email }</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>: </td>
                <td>{ profile.firstname } { profile.lastname }</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <br />
        <Card>
          <h3>Categories</h3>
          <hr/>
          <select
            className="p-inputtext p-component p-filled"
            onChange={ (e)=> setCurrentCategory(e.target.value) }
            value={ currentategory }
          >
            <option value="">select category</option>
            { categories && categories.length>0?
              categories.map((e, i)=>(
                <option key={ i } value={ e._id }>{ e.name }</option>
              ))
            :null }
          </select>
        </Card>
      </div>
      <div className="p-col-8">
        <Card style={{ height: '500px' }}>
          <h3>Quiz</h3>
          <hr/>
          <DataTable value={ quizes }>
            <Column field="name" header="Name" />
            <Column field="questions" header="Total Questions" />
            <Column field="total_marks" header="Total Marks" />
          </DataTable>
        </Card>
      </div>
    </div>
  )
}

export default Profile
