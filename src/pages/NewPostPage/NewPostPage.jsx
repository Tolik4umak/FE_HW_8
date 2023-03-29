import React from 'react'
import Form from '../../components/Form/Form'
import s from './style.module.css'

export default function NewPostPage() {
  return (
    <div className={s.container}>
        <h1>Добавление нового поста</h1>
        <Form/>
    </div>
  )
}
