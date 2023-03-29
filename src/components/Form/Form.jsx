import React from 'react'
import { useDispatch } from 'react-redux'
import { articleAddAction } from '../../store/reducers/articleReducers'
import s from './style.module.css'

export default function Form() {

  const dispatch = useDispatch()

  const publishPost = (event) => {
    event.preventDefault()
    const {title, id, article} = event.target
    dispatch(articleAddAction({
      id: Date.now(),
      userId: id.value,
      title: title.value,
      article: article.value
    }))
    id.value = ''
    title.value = ''
    article.value = ''
  }

  return (
    <form className={s.form} onSubmit={publishPost}>
       <div className={s.descr}>
            <input required name='title' className={s.item} type="text" placeholder='заголовок'/>
            <input required name='id' className={s.item} type="text" placeholder='ID Автора'/>
            <button className={s.item} type='submit'>добавить</button>
       </div>
       <textarea className={s.post} name="article" placeholder='Текст поста'></textarea>
    </form>
  )
}
