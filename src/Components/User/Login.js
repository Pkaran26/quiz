import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'
import { SERVER_URL } from '../../config'
import axios from 'axios'

const login = {
  email: '',
  password: ''
}

const Login = ({ history })=>{
  const [payload, setPayload] = useState(login)

  const setter = (key, value)=>{
    setPayload({
      ...payload,
      [key]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post(`${ SERVER_URL }/user/login`, payload)
    .then(res=>{
      if(res.data && res.data.status){
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setTimeout(()=>{
          history.push('/profile')
        }, 100)
      }else{
        alert(res.data.message)
      }
    })
    .catch(err=>{
      alert('try again')
    })
  }

  return (
    <form onSubmit={ handleSubmit } className="p-grid">
      <div className="p-col-3"></div>
      <div className="p-col-6">
        <Card>
          <h3>Login</h3>
          <hr />
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                type="text"
                onChange={ (e)=> setter('email', e.target.value) }
                value={ payload.email }
                required={ true }
              />
            </div>
            <div className="p-field">
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                type="password"
                onChange={ (e)=> setter('password', e.target.value) }
                value={ payload.password }
                required={ true }
              />
            </div>
            <div className="p-field">
              <Button label="Login" type="submit" style={{ width: '120px' }} />
              <NavLink style={{ marginLeft: '10px' }} to="/signup">Create an account</NavLink>
            </div>
          </div>
        </Card>
      </div>
    </form>
  )
}

export default Login
