import { AUTH_LOGIN, AUTH_LOGOUT, EDIT_PROFILE } from './actionTypes'

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('name')
  localStorage.removeItem('surname')
  localStorage.removeItem('customer')
  localStorage.removeItem('role')
  return {
    type: AUTH_LOGOUT,
  }
}
export function editProfile(userData) {
  localStorage.setItem('name', userData.name)
  localStorage.setItem('surname', userData.surname)
  localStorage.setItem('customer', userData.customer)
  localStorage.setItem('role', userData.role)
  return {
    type: EDIT_PROFILE,
    payload: userData,
  }
}

export function authSuccess(userData) {
  localStorage.setItem('token', userData.token)
  localStorage.setItem('name', userData.name)
  localStorage.setItem('surname', userData.surname)
  localStorage.setItem('customer', userData.customer)
  localStorage.setItem('role', userData.role)
  return {
    type: AUTH_LOGIN,
    payload: userData,
  }
}
