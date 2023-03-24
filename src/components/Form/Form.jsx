import React from 'react'

export default function Form() {
  return (
    <form>
       <div>
            <input type="text" placeholder='заголовок'/>
            <input type="text" placeholder='заголовок'/>
            <button type='submit'>добавить</button>
       </div>
       <textarea name="article" id=""></textarea>
    </form>
  )
}
