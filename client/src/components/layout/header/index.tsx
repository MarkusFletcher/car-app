import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={style.header}>
      <NavLink className={style.logo} to='/'>
        car.store
      </NavLink>
      <nav className={style.menu}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
        <NavLink to='/catalog/add'>Catalog Add</NavLink>
        <NavLink to='/registration'>Registration</NavLink>
      </nav>
    </header>
  )
}
