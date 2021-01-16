import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../store/actions/auth'
import { NavLink } from 'react-router-dom'
import './Dropdown.sass'

const Dropdown = () => {
  const dispatch = useDispatch()

  const exit = () => {
    dispatch(logout())
  }
  return (
    <div className="dropdown">
      <NavLink to="/user">Страница пользователя</NavLink>
      <button
        onClick={() => {
          exit()
        }}
      >
        Выход
      </button>
    </div>
  )
}
export default Dropdown
