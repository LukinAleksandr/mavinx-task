import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Dropdown from './Dropdown/Dropdown'
import './UserIcon.sass'

const UserIcon = () => {
  const [visivle, setVisivle] = useState(false)

  const toggleHandler = () => {
    setVisivle((prev) => !prev)
  }
  return (
    <div
      className="user-icon"
      onClick={() => {
        toggleHandler()
      }}
    >
      <FaUserCircle />
      {visivle ? <Dropdown></Dropdown> : null}
    </div>
  )
}
export default UserIcon
