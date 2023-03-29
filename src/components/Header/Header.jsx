import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import s from './style.module.css'

export default function Header() {

  const isActive = ({isActive}) => isActive? s.active: '';
    
  return (
    <div className={s.wrapper}>
        <nav className={s.nav}>
            <NavLink className={isActive} to='/'>Все посты</NavLink>
            <NavLink className={isActive} to='/post'>Добавить пост</NavLink>
            <ThemeChanger/>
        </nav>
    </div>
  )
}
