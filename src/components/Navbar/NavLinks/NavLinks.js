import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.sass'
const NavLinks = () => {
  return (
    <div className="navlinks">
      <NavLink to="/experts">Эксперты</NavLink>
      <NavLink to="/questions">Вопросы</NavLink>
      <NavLink to="/about">О нас</NavLink>
    </div>
  )
}
export default NavLinks
