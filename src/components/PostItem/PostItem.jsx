import React from 'react'
import { useDispatch } from 'react-redux'
import { articleDelAction } from '../../store/reducers/articleReducers'
import s from './style.module.css'

export default function PostItem({id, userId, title, article}) {

  const dispatch = useDispatch()

  return (
    <div className={s.post}>
        <h3>{title}</h3>
        <p>{article}</p>
        <button onClick={() => dispatch(articleDelAction(id))} className={s.delete_button}>remove</button>
    </div>
  )
}
