import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeChangeAction } from '../../store/reducers/themeReducer'
import s from './style.module.css'

export default function ThemeChanger() {

  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()



  return (
    <div className={s.themes}>
        <input
            onClick={(e) => dispatch(themeChangeAction(e.target.id))}  
            checked={theme === 'theme_ligth' ? true: false} 
            type="radio" 
            id='theme_ligth' 
            name='theme' />
        <label className={s.ligth}  htmlFor="theme_ligth"></label>

        <input 
            onClick={(e) => dispatch(themeChangeAction(e.target.id))} 
            checked={theme === 'theme_nigth' ? true: false} 
            type="radio" 
            id='theme_nigth' 
            name='theme' />
        <label className={s.dark}  htmlFor="theme_nigth"></label>
    </div>
  )
}
