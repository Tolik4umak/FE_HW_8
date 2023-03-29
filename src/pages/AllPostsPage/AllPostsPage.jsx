import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../../components/PostItem/PostItem'
import s from './style.module.css'

export default function AllPostsPage() {

  const articles = useSelector(state => state.articles)

  return (
    <div className={s.container}>
      {
        articles.length === 0 ? (
          <p>Пока нет ни одного поста</p>
        ):(
          articles.map((post) => <PostItem key={post.id} {...post}/>)
        )
      }
    </div>
  )
}
