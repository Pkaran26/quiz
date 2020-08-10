import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'

const Profile = ({ match })=>{
  const [profile, setProfile] = useState({
    email: '', firstname: '', lastname: ''
  })
  const [categories, setCategories]  = useState([])
  const [currentategory, setCurrentCategory]  = useState('')
  const [quizes, setQuizes]  = useState([])

  useEffect(()=>{

  }, [])

  return (
    <div className="p-grid">
      <div className="p-col-4">
        <Card>
          <h3>Profile</h3>
          <hr/>
          <div className="p-fluid">
            <div className="p-field">
              <label>Email</label>
              <strong>{ profile.email }</strong>
            </div>
            <div className="p-field">
              <label htmlFor="firstname">Firstname</label>
              <strong>{ profile.firstname }</strong>
            </div>
            <div className="p-field">
              <label>Lastname</label>
              <strong>{ profile.lastname }</strong>
            </div>
          </div>
        </Card>
      </div>
      <div className="p-col-2">
        <Card>
          <h3>Categories</h3>
          <hr/>
          <select
            onChange={ (e)=> setCurrentCategory(e.target.value) }
            value={ currentategory }
          >
            { categories && categories.length>0?
              categories.map((e, i)=>(
                <option key={ i }>{ e.name }</option>
              ))
            :null }
          </select>
        </Card>
      </div>
      <div className="p-col-6">
        <Card>
          <h3>Quiz</h3>
          <hr/>
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Category</th>
                <th>Total Questions</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody>
              { quizes && quizes.length>0?
                quizes.map((e, i)=>(
                  <tr key={ i }>
                    <td>{ i+1 }</td>
                    <td>{ e.category_id }</td>
                    <td>{ e.questions }</td>
                    <td>{ e.total_marks }</td>
                  </tr>
                ))
              :null }
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

export default Profile
