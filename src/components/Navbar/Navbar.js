import React from 'react'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import Wrapper from '../Wrapper/Wrapper'
import './Navbar.sass'
import NavLinks from './NavLinks/NavLinks'
import { NavLink } from 'react-router-dom'
import UserIcon from './UserIcon/UserIcon'

const Navbar = () => {
  return (
    <nav id="navbar">
      <Wrapper>
        <Logo></Logo>
        <Search></Search>
        <NavLinks></NavLinks>
        <div className="creat-project">
          <NavLink to="/experts">Создать проект</NavLink>
        </div>
        <UserIcon></UserIcon>
      </Wrapper>
    </nav>
  )
}
export default Navbar
