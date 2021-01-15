import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/auth'

import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()

  const exit = () => {
    dispatch(logout())
  }
  return (
    <>
      <NavLink to="/user">Edit User</NavLink>

      <button
        onClick={() => {
          exit()
        }}
      >
        exit
      </button>
    </>
  )
}

export default HomePage
