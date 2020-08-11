import React, { useState } from 'react'
import './App.css'
import Header from './Components/Common/Header'
import { Switch, Route } from 'react-router-dom'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup'
import Profile from './Components/User/Profile'
import Quiz from './Components/Quiz/Quiz'
import Dashboard from './Components/Admin/Dashboard'
import Questions from './Components/Admin/Questions'
import Users from './Components/Admin/Users'
import QuizManager from './Components/Admin/Quiz'

function App() {
  const [user, setUser] = useState('')

  const setUserDetail = (data)=>{
    setUser(data)
  }

  return (
    <div className="App">
      <Header
        user={ user }
      />
      <div className="container" style={{ marginTop: '40px' }}>
        <Switch>
          <Route path="/quiz" component={ (props)=> <Quiz { ...props } /> } exact/>
          <Route path="/signup" component={ (props)=> <Signup { ...props } /> } exact/>
          <Route path="/profile" component={ (props)=> <Profile setUserDetail={ setUserDetail } { ...props } /> } exact/>
          <Route path="/" component={ (props)=> <Login { ...props } /> } exact/>
          <Route path="/admin/dashboard" component={ (props)=> <Dashboard { ...props } /> } exact/>
          <Route path="/admin/questions" component={ (props)=> <Questions { ...props } /> } exact/>
          <Route path="/admin/quiz" component={ (props)=> <QuizManager { ...props } /> } exact/>
          <Route path="/admin/users" component={ (props)=> <Users { ...props } /> } exact/>
        </Switch>
      </div>
    </div>
  )
}

export default App
