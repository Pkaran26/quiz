import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { NavLink } from 'react-router-dom'

const login = {
  email: '',
  password: ''
}

const Login = ()=>{
  const [payload, setPayload] = useState(login)

  const setter = (key, value)=>{
    setPayload({
      ...payload,
      [key]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

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
