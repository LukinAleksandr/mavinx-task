import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import HomePage from '../pages/HomePage/HomePage'
import UserPage from '../pages/UserPage/UserPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/user">
          <UserPage></UserPage>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage></AuthPage>
      </Route>
      <Route path="/registration">
        <RegistrationPage></RegistrationPage>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
}
