import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes/routes'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const token = useSelector((state) => state.auth.token)

  const isAuth = !!token
  const routes = useRoutes(isAuth)

  return (
    <Router>
      <div>{routes}</div>
    </Router>
  )
}

export default App
